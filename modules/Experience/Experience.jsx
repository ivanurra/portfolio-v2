import { ButtonStack } from "../../components/ButtonStack";

export const Experience = () => {
  return (
    <div className="mb-20 md:mb-40 md:p-8">
      <a
        href="https://secuoyas.com/"
        className="cursor-pointer"
        target="_blank"
      >
        <p className="text-2xl mb-4">Experience</p>
        <div className="md:grid md:grid-cols-2 hover:bg-background-secondary md:p-2">
          {/* 1st Column */}
          <div>
            <p>2018-Present</p>
          </div>

          {/* 2nd Column */}
          <div>
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
              <ButtonStack stack="NextJS" />
              <ButtonStack stack="TailwindCSS" />
              <ButtonStack stack="JavaScript" />
              <ButtonStack stack="React" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
