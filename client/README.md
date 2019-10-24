App.js

1. state : users, todos, selected_user_id, selected_user

2. api :

\_callApi : /api/users, comonentDidMount 하면서 data 불러옴

\_getTodos : /api/todos, user 선택시 전체 todos 데이터 불러와서 필터하여 뿌려줌


3. route :

main > user와 board 게시판 선택

users > users, users/:id, users/:id/todos

board > ...

