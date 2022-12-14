import React from "react";

export interface iProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  }

export interface iChildren{
    children: React.ReactNode;
}

export interface iCartProviderData {
    // cart é um array de produtos
    cart: iProduct[];
    // addProduct recebe um produto e não tem retorno
    addProduct: (product: iProduct) => void;
   // deleteProducts recebe um produto e não tem retorno
    deleteProduct: (product: iProduct) => void;
  }