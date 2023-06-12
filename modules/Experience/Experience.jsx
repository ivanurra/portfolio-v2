export const Experience = () => {
  return (
    <div className="mb-20 md:mb-40 md:p-8">
      <a
        href="https://secuoyas.com/"
        className="cursor-pointer"
        target="_blank"
      >
        <p className="text-4xl mb-4">Experience</p>
        <div className="md:grid md:grid-cols-2 hover:bg-background-secondary md:p-4">
          {/* 1st Column */}
          <div className="md:w-1/4">
            <p>2018-Present</p>
          </div>

          {/* 2nd Column */}
          <div className="md:w-3/4">
            <p className="mb-2">Secuoyas</p>
            <p className="mb-2">IT</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vulputate non turpis vitae mollis. Mauris convallis condimentum
              lobortis. Ut interdum viverra vehicula. Donec odio orci, fringilla
              id nibh mollis, commodo hendrerit dui. Morbi ornare molestie elit.
              Etiam dictum iaculis nulla, vel lacinia tellus euismod molestie.
            </p>
            <div>
              <button class="rounded-full bg-green-secondary text-green-primary mt-8 w-16 h-8">
                Stack
              </button>
              <button class="rounded-full bg-green-secondary text-green-primary mt-8 w-16 h-8 ml-3">
                Stack
              </button>
              <button class="rounded-full bg-green-secondary text-green-primary mt-8 w-16 h-8 ml-3">
                Stack
              </button>
              <button class="rounded-full bg-green-secondary text-green-primary mt-8 w-16 h-8 ml-3">
                Stack
              </button>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
