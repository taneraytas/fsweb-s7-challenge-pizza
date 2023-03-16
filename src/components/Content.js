import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const pizza = {
  isim: "Full Stack Developer Pizzası",
  fiyat: 85.5,
  star: "4.9",
  yorum: "200",
};

const checkData = [
  { id: "1", value: "Papperroni", status: false },
  { id: "2", value: "Domates", status: false },
  { id: "3", value: "Biber", status: false },
  { id: "4", value: "Sosis", status: false },
  { id: "5", value: "Mısır", status: false },
  { id: "6", value: "Sucuk", status: false },
  { id: "7", value: "Kanada Jambonu", status: false },
  { id: "8", value: "Pastırma", status: false },
  { id: "9", value: "Ananas", status: false },
  { id: "10", value: "Tavuk Izgara", status: false },
  { id: "11", value: "Jalepeno", status: false },
  { id: "12", value: "Kabak", status: false },
  { id: "13", value: "Soğan", status: false },
  { id: "14", value: "Sarımsak", status: false },
];

const submitForm = {
  ad: "",
  pizzaSecimi: "",
  pizzaBoyutu: "",
  listRadio: "",
  toplamFiyat: "",
  malzemeler: "",
};

export default function Content() {
  const [adetMalzeme, setAdetMalzeme] = useState(0);
  const [adet, setAdet] = useState(1);
  const [datalar, setDatalar] = useState([...checkData]);
  const [formInfo, setFormInfo] = useState({ ...submitForm });

  const changeHandler = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const arttir = () => {
    setAdet(adet + 1);
  };
  const azalt = () => {
    adet > 0 ? setAdet(adet - 1) : setAdet(adet);
  };
  const statusChange = (item, i) => {
    const newDatalar = [...datalar];
    newDatalar[i].status = !newDatalar[i].status;
    setDatalar(newDatalar);
    // console.log(newDatalar);
  };
  const secimlerToplam = () => {
    return `${adetMalzeme * 5}₺`;
  };
  const checkboxChangeHandler = (e) => {
    const { name, checked } = e.target;
    setFormInfo({ ...formInfo, [name]: checked });
  };

  useEffect(() => {
    const filteredArr = datalar.filter((item) => {
      return item.status === true;
    });
    setAdetMalzeme(filteredArr.length);
    console.log(filteredArr);
  }, [datalar]);

  return (
    <div className="w-[50vw] m-auto">
      <h3 className="font-Barlow font-bold mt-5">{pizza.isim}</h3>
      <div className="grid grid-cols-2 mt-10 mb-5">
        <div className="font-bold text-xl ">{pizza.fiyat}₺</div>
        <div className="grid grid-cols-2 text-gray-400 text-sm">
          <div>{pizza.star}</div>
          <div>({pizza.yorum})</div>
        </div>
      </div>
      <p className="text-zinc-400 text-justify  text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        convallis ornare dui in lacinia. Phasellus odio nunc, pretium vitae
        rhoncus sed, pretium vitae ante. Proin consequat risus vel nisl cursus
        consequat. Nulla non tristique turpis, eget mattis ligula. Aliquam
        convallis vulputate enim et posuere. Vivamus sodales ultricies sem quis
        euismod. Cras luctus venenatis risus, et scelerisque elit convallis id.
        Fusce non purus hendrerit, feugiat arcu quis, finibus elit. Pellentesque
        egestas accumsan ipsum, in porttitor lorem venenatis sed. Donec id nisi
        diam. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* <div className="grid grid-cols-2 place-items-start mt-10"> */}

        <div className="flex justify-between mt-10">
          <div className="flex flex-col">
            <h3 className="font-semibold mb-1">
              Boyut Seç <span className="text-red-500 font-bold">*</span>
            </h3>

            <ul>
              <li className="w-full">
                <div className="flex items-center ">
                  <input id="list-radio-small" type="radio" name="listRadio" />
                  <label
                    htmlFor="list-radio-small"
                    className="w-full py-1 ml-2 text-sm font-medium text-zinc-500 dark:text-zinc-500"
                  >
                    Küçük
                  </label>
                </div>
              </li>

              <li className="w-full">
                <div className="flex items-center ">
                  <input id="list-radio-mid" type="radio" name="listRadio" />
                  <label
                    htmlFor="list-radio-mid"
                    className="w-full py-1 ml-2 text-sm font-medium text-zinc-500 dark:text-zinc-500"
                  >
                    Orta
                  </label>
                </div>
              </li>

              <li className="w-full  ">
                <div className="flex items-center ">
                  <input id="list-radio-large" type="radio" name="listRadio" />
                  <label
                    htmlFor="list-radio-large"
                    className="w-full py-1 ml-2 text-sm font-medium text-zinc-500 dark:text-zinc-500"
                  >
                    Büyük
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="grid grid-rows-2">
            <div className="font-semibold">
              Hamur Seç <span className="text-red-500 font-bold">*</span>{" "}
            </div>
            <div>
              <div className="inline-block relative w-[100%]">
                <select
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  name="selected"
                  onChange={changeHandler}
                >
                  <option disabled>Hamur Kalınlığı</option>
                  <option name="selected">İnce</option>
                  <option name="selected">Kalın</option>
                  <option name="selected">Kaşar Peynirli</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="font-semibold ">Ek Malzemeler</h3>
          <p className="mt-2 font-Barlow text-zinc-400 text-sm font-bold">
            En fazla 10 malzeme seçebilirsiniz. (Adet: 5₺)
          </p>
        </div>
        <div className="flex flex-col flex-wrap h-60">
          {checkData.map((item, index) => (
            <div key={item.id}>
              <input
                id={item.id}
                type="checkbox"
                name="malzemeler"
                className="mt-3"
                checked={item.status}
                onChange={() => (
                  statusChange(item, index),
                  checkboxChangeHandler,
                  console.log(formInfo)
                )}
              />
              <label htmlFor={item.id} className="ml-2">
                {item.value}
              </label>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-Barlow font-bold mt-5 mb-3">Sipariş Notu</h3>

          <textarea
            id="message"
            rows="4"
            className="p-2.5 w-full h-13 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-400 focus:border-yellow-500 resize-none"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          ></textarea>
        </div>

        <hr className="my-10 border-zinc-500" />

        <div>
          <h3 className="font-Barlow font-bold mt-5 mb-3">Ad Soyad</h3>

          <input
            id="message"
            type="text"
            rows="4"
            className="p-2.5 w-full h-13 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-400 focus:border-yellow-500 resize-none"
          ></input>
        </div>
        <hr className="my-10 border-zinc-500" />

        <div className="flex justify-between">
          <div className="flex justify-start">
            <button
              className="w-12 h-12 border rounded-md bg-yellow-tek hover:bg-amber-200"
              onClick={azalt}
            >
              -
            </button>
            <div className="w-12 h-12 border rounded-md flex items-center justify-center">
              {adet}
            </div>
            <button
              className="w-12 h-12 border rounded-md bg-yellow-tek hover:bg-amber-200"
              onClick={arttir}
            >
              +
            </button>
          </div>
          <div className="mb-32">
            <div className="border p-8 rounded-sm border-zinc-300 ">
              <div className="text-lg font-bold font-Barlow mb-4 mr-32 ">
                Sipariş Toplamı
              </div>
              <div className="flex justify-between font-Barlow ">
                <div>
                  Seçimler (<span>{adetMalzeme}</span> adet)
                </div>
                <div> {secimlerToplam()} </div>
              </div>
              <div className="flex justify-between font-Barlow font-bold text-red">
                <div>Toplam</div>
                <div>{adet * pizza.fiyat + adetMalzeme * 5}</div>
              </div>
            </div>
            <div>
              <Link to="/">
                <button className="w-80 h-12 bg-yellow-tek hover:border-y-4 hover:border-zinc-500  rounded-sm">
                  Sipariş Ver
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
