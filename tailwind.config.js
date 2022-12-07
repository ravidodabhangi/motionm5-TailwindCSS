module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        motion:{
          "0%,100%":{
            transform:"translateX(-25%)",
          },
          "50%":{transform:"translateX(10%)"}
        },
        motion1:{
          "0%,100%":{
            transform:"translateX(25%)",
          },
          "50%":{transform:"translateX(10%)"}
        },
      }
    },
  },
  plugins: [],
}