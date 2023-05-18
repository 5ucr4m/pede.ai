import storeReducer, { StoreSlice, fetchStore } from "./storeSlice";
import { PayloadAction } from "@reduxjs/toolkit";

describe("store reducer", () => {
  const initialState: StoreSlice = {
    _id: "",
    name_company: "",
    time_delivery: "",
    banner: "",
    logo: "",
    data: [],
    status: "idle",
    error: null,
  };

  it("should handle initial state", () => {
    expect(storeReducer(undefined, {} as PayloadAction)).toEqual(initialState);
  });

  it("should handle fetchStore.pending", () => {
    expect(
      storeReducer(initialState, { type: fetchStore.pending.type })
    ).toEqual({
      _id: "",
      name_company: "",
      time_delivery: "",
      banner: "",
      logo: "",
      data: [],
      status: "loading",
      error: null,
    });
  });

  it("should handle fetchStore.fulfilled", () => {
    const mock = {
      _id: "3243sfdfsdf2423sdfs",
      name_company: "Restaurante Divino Fogão - River Shopping",
      time_delivery: "50 - 65 min",
      banner: "",
      logo: "https://pedeai-merchant.sfo2.digitaloceanspaces.com/merchant_953/resized/logo-604948.png",
      categories: [
        [
          {
            name_category: "Lançamentos",
            itens: [
              {
                id: "63e550cc670bcc30c10ae2f4",
                title: "Sub Carne Seca c/ Cream Cheese 15cm",
                description:
                  "Pão, Carne Seca c/ Cream Cheese, Queijo da sua preferência .",
                tag_new: 0,
                img: "https://pedeai-merchant.sfo2.digitaloceanspaces.com/merchant_6548/resized/item_770742.png",
                size: "30cm",
                price: 37.5,
                discount_price: 37.5,
                tag_discount: 0,
              },
              {
                id: "60d52b053d7d7b73416d1161",
                title: "Sub Carne Seca c/ Cream Cheese 15cm",
                description:
                  " Carne Seca c/ Cream Cheese, Queijo da sua preferência.",
                tag_new: 0,
                img: "https://pedeai-merchant.sfo2.digitaloceanspaces.com/merchant_6548/resized/item_546244.png",
                size: "15cm",
                price: 21.9,
                discount_price: 21.9,
                tag_discount: 0,
              },
            ],
          },
          {
            name_category: "Dupla do dia 1sub + Bebida",
            itens: [
              {
                id: "60d52b053d7d7b73416d1157",
                title: "Steak churrasco",
                description: "Um  steak de carne bovina com sabor churrasco. ",
                tag_new: 1,
                img: "https://pedeai-merchant.sfo2.digitaloceanspaces.com/merchant_6548/resized/item_495321.png",
                size: "15cm",
                price: 21,
                discount_price: 21,
                tag_discount: 0,
              },
            ],
          },
        ],
      ],
    };
    expect(
      storeReducer(initialState, {
        type: fetchStore.fulfilled.type,
        payload: mock,
      })
    ).toEqual({
      _id: mock._id,
      name_company: mock.name_company,
      time_delivery: mock.time_delivery,
      banner: mock.banner,
      logo: mock.logo,
      data: mock.categories[0],
      status: "succeeded",
      error: null,
    });
  });

  it("should handle fetchPosts.rejected", () => {
    const error = "Error fetching posts";

    expect(
      storeReducer(initialState, {
        type: fetchStore.rejected.type,
        payload: error,
      })
    ).toHaveProperty("status", "failed");

    expect(
      storeReducer(initialState, {
        type: fetchStore.rejected.type,
        payload: error,
      })
    ).toHaveProperty("error", "Falha ao carregar a loja");
  });
});
