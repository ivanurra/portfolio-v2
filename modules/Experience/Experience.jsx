export const Experience = () => {
  return (
    <div className="mb-20 md:mb-40 md:p-8 ">
      <a
        href="https://secuoyas.com/"
        className="cursor-pointer"
        target="_blank"
      >
        <p className="text-4xl mb-4">Experience</p>
        <div className="grid grid-cols-2 md:grid-cols-5 hover:bg-background-secondary">
          {/* 1st Column */}
          <div>
            <p>2018-Present</p>
          </div>

          {/* 2nd Column */}
          <div>
            <p>Secuoyas</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vulputate non turpis vitae mollis. Mauris convallis condimentum
              lobortis. Ut interdum viverra vehicula. Donec odio orci, fringilla
              id nibh mollis, commodo hendrerit dui. Morbi ornare molestie elit.
              Etiam dictum iaculis nulla, vel lacinia tellus euismod molestie.
            </p>
            <button class="rounded-full bg-green-secondary text-green-primary mt-8 w-16 h-8">
              Stack
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};
