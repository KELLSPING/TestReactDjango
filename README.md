# Test - React Django

## Learning Resource
- Connect Django Backend to React.js Frontend - Full Stack App Development Tutorial
  - https://www.youtube.com/watch?v=fBA-jaWab9k
- Git Commit Message 這樣寫會更好，替專案引入規範與範例
  - https://wadehuanglearning.blogspot.com/2019/05/commit-commit-commit-why-what-commit.html
- Django React App Tutorial
  - https://www.youtube.com/playlist?list=PLmEKHA8iFrmBCo1Guf3xbM1af5p5Ja-fy

## Tools
- Code formatting in VSCode
  - Windows : Shift + Alt + F
  - Linux : Ctrl + Shift + I
- MUI Core / Material UI
  - https://mui.com/material-ui/
- MUI Core / Material UI / Material Icons
  - https://mui.com/material-ui/material-icons/
- Django REST frameworl - ViewSets
  - https://www.django-rest-framework.org/api-guide/viewsets/
- MUI Core / Material UI / Text Field
  - https://mui.com/material-ui/react-text-field/
- MUI Core / Material UI / Select
  - https://mui.com/material-ui/react-select/
- MUI Core / X / Date and Time Pickers
  - https://mui.com/x/react-date-pickers/getting-started/
- MUI Core / X / Date Picker
  - https://mui.com/x/react-date-pickers/date-picker/
- React Hook Form
  - https://react-hook-form.com/
- AXIOS
  - https://axios-http.com/docs/intro
- Material React Table V2
  - https://www.material-react-table.com/

## Icons
- Home
  - https://mui.com/material-ui/material-icons/?query=home&selected=Home
- About
  - https://mui.com/material-ui/material-icons/?query=about&selected=Info
- Create
  - https://mui.com/material-ui/material-icons/?query=create&selected=Create

## Python Packages
- pipenv 2023.11.17
  - $ pip install pipenv

## Packet Mangager : Scoop
- nodejs-lts 20.10.0

## Cmd
- project
  - $ mkdir TestReactDjango
  - $ cd TestReactDjango
  - $ pipenv install djangorestframework
  - $ pipenv install django-cors-headers
  - $ pipenv install django
  - $ pipenv shell
- frontend
  - $ mkdir frontend
  - $ cd frontend
  - $ npx create-react-app frontend
  - $ npm install axios
  - $ npm i react-router-dom
  - $ npm install @mui/material @emotion/react @emotion/styled
  - $ npm install @mui/icons-material
  - $ npm install react-hook-form
  - $ npm install @mui/x-date-pickers
  - $ npm install dayjs
  - $ npm install axios
  - $ npm install material-react-table@1
  - $ npm start
- backend
  - $ mkdir backend
  - $ cd backend
  - $ django-admin startproject crud .
  - $ python .\manage.py startapp api
  - $ python .\manage.py makemigrations
  - $ python .\manage.py migrate
  - $ python .\manage.py createsuperuser
  - $ python .\manage.py runserver
