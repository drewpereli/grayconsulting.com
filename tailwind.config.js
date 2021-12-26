const imagesPath = '../images'; // Relative to ./src/styles/app.css

module.exports = {
  content: ['./src/**/*.pug'],
  theme: {
    extend: {
      backgroundImage: {
        barney: `url('${imagesPath}/barney.jpg')`,
        dogs: `url('${imagesPath}/dogs.jpg')`,
      },
      height: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
