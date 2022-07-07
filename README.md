# UserAPI---nodepostgres

This is the User details API built with -  <b> NodeJS, ExpressJS and PostgreSQL </b>

It helps to manage users data.

<h3>Services provided by api:</h3>
<ol>
  <li>Add new user</li>
  <li>Get all user</li>
  <li>Get user with particular id </li>
  <li>Update user with particular id</li>
  <li>Deactivate a user i.e. make isdeleted=true </li>
  <li>Activate a user i.e. make isdeleted= false</li>
  <li>Get all activated user</li>
  <li>Get all deactivated user</li>
</ol>

<h3>User Structure</h3>
user:{</br>
  id: string,</br>
  login: string,</br>
  password: string,</br>
  age: integer,</br>
  isdeleted: boolean,</br>
  firstname: string,</br>
  lastname: string</br>
}

<h3>Endpoints</h3>
<table>
  <tr>
    <th> Service </th>
    <th> Request type </th>
    <th> Endpoint </th>
    <th> Request body </th>
  </tr>
  <tr>
    <td>Add new user</td>
    <td>POST</td>
    <td>/addUser</td>
    <td>{user}</td>
  </tr>
  <tr>
    <td>Get all user</td>
    <td>GET</td>
    <td>/allUsers</td>
    <td></td>
  </tr>
  <tr>
    <td>Get user with particular id</td>
    <td>GET</td>
    <td>/:id</td>
    <td></td>
  </tr>
  <tr>
    <td>Update user with particular id</td>
    <td>PUT</td>
    <td>/:id</td>
    <td>{user}</td>
  </tr>
  <tr>
    <td>Deactivate a user</td>
    <td>PUT</td>
    <td>/deactivate/:id</td>
    <td></td>
  </tr>
  <tr>
    <td>Activate a user</td>
    <td>PUT</td>
    <td>/activate/:id</td>
    <td></td>
  </tr>
  <tr>
    <td>Get all activated user</td>
    <td>GET</td>
    <td>/deactivated</td>
    <td></td>
  </tr>
  <tr>
    <td>Get all deactivated user</td>
    <td>GET</td>
    <td>/activated</td>
    <td></td>
  </tr>
</table>


<h2>Happy Coding!</h2>
