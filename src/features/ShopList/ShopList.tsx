import React, { useRef, useState, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "../../hooks/react-redux";

import { Button } from "reactstrap";
import ReactToPrint from "react-to-print";

import { removeItem, updateItem } from "./actions";
import PrintPage from "./PrintPage";
import Item from "./Item/Item";
import CustomItems from "./Custom/CustomItems";
import { Modal } from "../../views";
import CustomAddForm from "./Custom/CustomAddForm";
import { IShopItem, TShopListState } from "./types";

import "./ShopList.scss";

const ShopList: React.FunctionComponent = () => {
  const [customItems, setCustomItems] = useState<IShopItem[]>([]);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const { items }: any = useSelector(
    (state: { shopList: TShopListState }) => ({
      items: state.shopList
    })
  );

  const dispatch = useDispatch();

  const removeShopListItem = (item: IShopItem) => dispatch(removeItem(item));
  const updateShopListItem = (item: IShopItem, amount: number) =>
    dispatch(updateItem(item, amount));

  const componentRef = useRef<any>();

  // Warning! I implemented functionality for custom items in this way just
  // to create use case when I can appy hooks useMemo and useCallback.
  // Otherwise, it would be better to use props.items
  const addCustomItem = useCallback((item: IShopItem):void => {
    setCustomItems(prevState => [...prevState, item]);
    setIsShowModal(false);
  }, []);

  const removeCustomItem = useCallback((index:number):void => {
    setCustomItems(prevState => prevState.filter((item, key) => index !== key));
  }, []);

  const itemList = items.length > 0 && items.map((item:IShopItem) => (
    <Item
      key={`${item.id}-${item.unit}`}
      item={item}
      updateItem={updateShopListItem}
      removeItem={removeShopListItem}
    />
  ));

  const customItemsListMemo = useMemo(
    () => (
      <CustomItems items={customItems} removeCustomItem={removeCustomItem} />
    ),
    [customItems, removeCustomItem]
  );

  const customFormAdd = useMemo(
    () => (
      <CustomAddForm
        isShown={isShowModal}
        onAdd={addCustomItem}
        onClose={() => setIsShowModal(false)}
      />
    ),
    [isShowModal, addCustomItem]
  );

  const customItemList = (
    <>
      <Modal show={isShowModal} modalClosed={() => setIsShowModal(false)}>
        {customFormAdd}
      </Modal>
      {customItemsListMemo}
      <Button onClick={() => setIsShowModal(true)}>Add my Item</Button>
    </>
  );

  return (
    <div className="shop-list pr-3 pt-3">
      <h5>Shop List</h5>

      {!items.length && (
        <div className="text-secondary">
          Add items from recipe ingredients by clicking on ingredient's name
        </div>
      )}

      {itemList}
      {customItemList}

      <div className="text-right">
        {(items.length > 0 || customItems.length > 0) && (
          <>
            <ReactToPrint
              trigger={() => <Button color="success">Print</Button>}
              content={() => componentRef.current}
            />
            <div className="d-none">
              <PrintPage
                items={items}
                customItems={customItems}
                ref={componentRef}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShopList;
