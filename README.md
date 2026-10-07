# React Router DOM + Vite

A simple React application built with **Vite** and **React Router DOM** to practice routing, nested layouts, dynamic routes, navigation, and API data loading.

## 🚀 Features

- React + Vite
- React Router DOM
- Nested routes with `Outlet`
- `Link` and `NavLink`
- Dynamic routes with `useParams`
- Route loaders with `loader`
- API data using `useLoaderData`
- GitHub API integration
- Tailwind CSS

## 📁 Routes

| Route | Description |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `/user/:userId` | Dynamic User |
| `/github` | GitHub Profile |

## 🛣️ Routing

Routes are created using `createBrowserRouter`:

```
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route
        path="github"
        loader={GithubInfo}
        element={<Github />}
      />
    </Route>
  )
);
```

## 🧩 Layout

`Layout.jsx` uses `Outlet` to render child routes:

```
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
```

This keeps the **Header** and **Footer** common across all pages.

## 🐙 GitHub Loader

The GitHub page uses a React Router loader to fetch GitHub user data:

```
export const GithubInfo = async () => {
  const response = await fetch(
    "https://api.github.com/users/Subhajit-Bose"
  );

  return response.json();
};
```

The data is accessed using:

```
const data = useLoaderData();
```

## 📦 Installation

```
npm install
npm run dev
```

Then open the local URL provided by Vite.

## 📚 Concepts Practiced

- `createBrowserRouter`
- `createRoutesFromElements`
- `RouterProvider`
- `Route`
- `Outlet`
- `Link`
- `NavLink`
- `useParams`
- `loader`
- `useLoaderData`
