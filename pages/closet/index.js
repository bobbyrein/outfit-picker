import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import { useEffect, useState } from "react";
import ClosetNavbar from "../../components/ClosetNavbar";
import ClothingWOCheck from "../../components/ClothingWOCheck";
import MultiSelect from "../../components/MultiSelect";
import { useThingsByOwner } from "../../graphql/queries";
import Container from "../../layouts/Container";

function Closet() {
  const { user } = useUser();
  const { data, isLoading, isError, error } = useThingsByOwner(
    user && user.sub,
    {
      enabled: !!user,
    }
  );
  const [closet, setCloset] = useState([]);
  const [selector, setSelector] = useState("everything");

  // useEffect(() => {
  //   fetch(edges)
  //     .then((response) => response.json())
  //     .then((clothing) => setCloset(clothing));
  //   }, []);

  // console.log('closet: ', closet);

  useEffect(() => {
    if (selector === "everything") {
      setCloset(data);
    } else {
      const newFilteredCloset = data.filter((it) => {
        return it.node.characteristics.data.find(
          (it) => it.node.option.value === selector
        );
      });

      setCloset(newFilteredCloset);
    }
  }, [data, selector]);

  const handleChange = (event) => {
    setSelector(event.target.value);
  };

  return (
    <div className="bg-black h-full mb-30 items-center">
      <Head>
        <title>Closet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClosetNavbar />
      <Filter selector={selector} onChangeHandler={handleChange} />
      <h2 className="text-center text-xl">Closet</h2>
      <div className="grid grid-cols-2 gap-x-3.5 gap-y-6 m-1.5 md:grid-cols-4">
        {/* replace edges with closet */}
        {isLoading ? (
          <p>Loading</p>
        ) : (
          closet?.map((it) => (
            <ClosetItem key={it.node.id} clothing={it.node} />
          ))
        )}
      </div>
    </div>
  );
}

export default Closet;

Closet.getLayout = function getLayout(page) {
  return <Container>{page}</Container>;
};

const ClosetItem = ({ clothing }) => {
  return (
    <div className="text-sm" key={clothing.id}>
      <ClothingWOCheck clothing={clothing} imageAlt={"ClothingWOCheck"} />
      <MultiSelect className="p-0.5" />
    </div>
  );
};

const Filter = ({ selector, onChangeHandler }) => {
  return (
    <div className="flex-1 bg-black">
      <select
        value={selector}
        onChange={onChangeHandler}
        className="select select-ghost select-bordered w-full max-w-xs text-xs"
      >
        <option>everything</option>
        <option>top</option>
        <option>bottom</option>
        <option>shoes</option>
        <option value="going-out">Going out</option>
        <option value="going-to-work">Going to work</option>
        <option value="working-out">Working out</option>
      </select>
    </div>
  );
};
