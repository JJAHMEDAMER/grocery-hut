# Grocery Hut

Grocery hut is an app that helps you to organize your shopping and remember the stuff you need from the store and don't have to worry about losing the list since every thing is backed up by the database on the backend

## Features

1. Add items
2. delete Items
3. Edit Item

### CRUD App

This is a CRUD (Create, Read, Update and Delete) where we create a grocery item or delete them or edit. Each one has a specific http method

| CRUD OPERATION | HTTP REQUEST METHOD |
| -------------- | ------------------- |
| Create         | POST                |
| Read           | GET                 |
| Delete         | DELETE              |
| Update         | PUT                 |

## Frontend

### React and Vite

<div>
<a href="https://beta.reactjs.org/"><img src="react.png" width='50'/></a>
<a href="https://vitejs.dev/"><img src="vitejs.svg" width='50'/></a>
</div>
This app uses react framework and vite as a bundler

React is great for state management and creating the UI using JSX

Vite is used for the fast bundling, vite uses rollup under the hood which is faster than webpack but has less feathers which wasn't needed

## Backend

### Django and Django Rest Framework

<div>
<a href="https://www.djangoproject.com/"><img src="django.svg" height='50'/></a>
<a href="https://www.django-rest-framework.org/"><img src="rest.png" height='50'/></a>
</div>
This app uses Django framework and django-rest framework for the api

The Backend is built using the python framework django for fast development and utilize the built-in models that the framework provides, including the database models and the views model which is used in the admin dashboard and the api view

The rest api is made using the django rest framework

### Color Pallet

```CSS
:root {
    --yellow: #FFDBA4;
    --card-bg: rgba(0, 0, 0, 0.859);
    --white: #fff;
}

```

### Fonts

```html
<!-- Fonts Poppins -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;0,800;0,900;1,200;1,400;1,600;1,800;1,900&display=swap"
  rel="stylesheet"
/>
``
```
