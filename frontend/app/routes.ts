import { type RouteConfig, index } from "@react-router/dev/routes";

export default [index("routes/home.tsx")] satisfies RouteConfig;

// import { index, route } from "@react-router/dev/routes";

// export default [
//   index("./home.tsx"),
//   route("products/:pid", "./product.tsx"),
// ];