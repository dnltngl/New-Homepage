function Body() {
  return (
    <section className=" self-stretch min-h-full">
      <div className="bg-neutral-VeryDarkBlue p-5 sm:p-7 sm:w-96 sm:text-2x">
        <h1 className="text-primary-SoftOrange text-3xl sm:text-4xl font-Inter ">
          New
        </h1>
        <ul className=" text-neutral-OffWhite">
          <li className="font-Inter font-medium text-xl sm:text-2xl mb-1 sm:mt-7 hover:text-primary-SoftOrange">
            Hydrogen VS Electric Cars
          </li>
          <p className="text-neutral-DarkGrayishBlue font-Inter text-sm sm:text-lg mb-7 ">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <hr className="border-neutral-DarkGrayishBlue mb-7" />
          <li className="font-Inter font-medium text-xl mb-1 sm:mt-10 sm:text-2xl hover:text-primary-SoftOrange">
            The Downsides of AI Artistry
          </li>
          <p className="text-neutral-DarkGrayishBlue font-Inter-light text-sm mb-7 sm:text-lg">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr className="border-neutral-DarkGrayishBlue mb-7" />
          <li className="font-Inter font-medium text-xl mb-1 sm:mt-10 sm:text-2xl hover:text-primary-SoftOrange">
            Is VC Funding Drying Up?
          </li>
          <p
            className="text-neutral-DarkGrayishBlue font-Inter-light text-sm mb-7 sm:text-lg
            "
          >
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
          <hr className="border-neutral-DarkGrayishBlue mb-5" />
        </ul>
      </div>
    </section>
  );
}

export default Body;
