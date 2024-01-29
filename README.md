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
1. $ mkdir TestReactDjango
2. $ cd TestReactDjango
3. $ pipenv install djangorestframework
4. $ pipenv install django-cors-headers
5. $ pipenv install django
6. $ pipenv shell
7. $ mkdir backend
8. $ cd backend
9. Create project in the current directory.
    - $ django-admin startproject crud .
10. $ python .\manage.py startapp api
11. $ python .\manage.py makemigrations
12. $ python .\manage.py migrate
13. $ python .\manage.py createsuperuser
14. $ python .\manage.py runserver
15. $ cd TestReactDjango
16. $ npx create-react-app frontend
17. $ cd frontend
18. $ npm install axios
19. $ npm start
20. $ npm i react-router-dom
21. $ npm install @mui/material @emotion/react @emotion/styled
22. $ npm install @mui/icons-material
