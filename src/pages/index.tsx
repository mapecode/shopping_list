import { ShoppingItem } from "@prisma/client";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import { trpc } from "../utils/trpc";
import ItemModal from '../components/ItemModal'


const Home: NextPage = () => {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false)


  return (
    <>
      <Head>
        <title>Shopping List</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {modalOpen && <ItemModal setModalOpen={setModalOpen} setItems={setItems} />}


      <main className="mx-auto my-12 max-w-3xl">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">My shopping list</h2>
          <button
            type='button'
            onClick={() => setModalOpen(true)}
            className='rounded-md bg-violet-500 p-2 text-sm text-white transition hover:bg-violet-600'>
            Add shopping item
          </button>
        </div>
        <ul className="mt-4">
          {items.map((item) => (
            <li key={item.id} className="flex items-center justify-between">
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
