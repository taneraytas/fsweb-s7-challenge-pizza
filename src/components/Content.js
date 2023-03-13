import React from "react";

export default function Content() {
  const checkData = [
    { id: "1", value: "Papperroni", status: true },
    { id: "2", value: "Domates", status: false },
    { id: "3", value: "Biber", status: false },
    { id: "4", value: "Sosis", status: true },
    { id: "5", value: "Mısır", status: true },
    { id: "6", value: "Sucuk", status: false },
    { id: "7", value: "Kanada Jambonu", status: false },
    { id: "8", value: "Pastırma", status: false },
    { id: "9", value: "Ananas", status: true },
    { id: "10", value: "Tavuk Izgara", status: false },
    { id: "11", value: "Jalepeno", status: true },
    { id: "12", value: "Kabak", status: true },
    { id: "13", value: "Soğan", status: false },
    { id: "14", value: "Sarımsak", status: false },
  ];
  return (
    <div className="w-[50vw] m-auto">
      <h3 className="font-Barlow font-bold mt-5">
        Position Absolute Acılı Pizza
      </h3>
      <div className="flex justify-between w-[50vw]">
        <div> 85 </div>
        <div>
          <div>4.9</div>
          <div>(200)</div>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 mt-10 mb-5">
        <div className="font-bold text-xl ">85.50₺</div>
        <div className="grid grid-cols-2 text-gray-400 text-sm">
          <div>4.9</div>
          <div>(200)</div>
        </div>
      </div> */}
      <p className="text-gray-400 text-justify  text-sm">
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
      <div className="grid grid-cols-2 place-items-start mt-10">
        <form>
          <h3 className="font-semibold mb-4">
            Boyut Seç <span className="text-red-500 font-bold">*</span>
          </h3>

          <ul>
            <li className="w-full">
              <div className="flex items-center ">
                <input id="list-radio-small" type="radio" name="list-radio" />
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
                <input id="list-radio-mid" type="radio" name="list-radio" />
                <label
                  htmlFor="list-radio-mid"
                  className="w-full py-1 ml-2 text-sm font-medium text-zinc-500 dark:text-zinc-500"
                >
                  Orta
                </label>
              </div>
            </li>

            <li className="w-full">
              <div className="flex items-center ">
                <input id="list-radio-large" type="radio" name="list-radio" />
                <label
                  htmlFor="list-radio-large"
                  className="w-full py-1 ml-2 text-sm font-medium text-zinc-500 dark:text-zinc-500"
                >
                  Büyük
                </label>
              </div>
            </li>
          </ul>
        </form>
        <div className="grid grid-rows-2">
          <div className="font-semibold">
            Hamur Seç <span className="text-red-500 font-bold">*</span>{" "}
          </div>
          <div>
            <div class="inline-block relative w-60">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option disabled selected>
                  Hamur Kalınlığı
                </option>
                <option>İnce</option>
                <option>Kalın</option>
                <option>Kaşar Peynirli</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
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
      <div className="grid grid-cols-3  mb-20">
        {checkData.map((item, index) => (
          <div key={item.id}>
            <input
              id={item.id}
              type="checkbox"
              name="malzemeler"
              value={item.value}
              className="mt-3"
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
      <hr className="m-5 w-auto" />
      dasdas
    </div>
  );
}
