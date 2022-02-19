<h2>Introduction</h2>

<h3>About</h3>
<p>This is a example nodeJs REST api. The main function of this </p>
<ul>
  <li><strong> / </strong><span>Is the only route avaible to interact with so far. </span></li>
</ul>
<p>This project uses the following technologies:</p>
<ul>
  <li><strong>BACKEND: </strong><span>NODE JS as the Backend. </span></li>
  <li><strong>DATABASE: </strong><span>MYSQL as the Database. </span></li>
  <li><strong>OTHERS: </strong><span>EXPRESS as server handler. </span></li>
</ul>
<p>The nodeJS dependencies of this project are the followings:</p>
<ul>
  <li><strong>nodemon: </strong><span>In order to refresh the server with each file saving. </span></li>
  <li><strong>Mysql2: </strong><span>I'M using mysql2 instead mysql due to an nodeJs error. </span></li>
  <li><strong>express: </strong><span>Due to Express is the nodeJS framework that we are using in order to create this nodeJS server. </span></li>
</ul>
<h3>HTTP METHODS</h3>

<ul>
  <li><strong>GET - </strong><span>Get the all employes or 1 employe with id </span></li>
  <li><strong>POST - </strong><span>Create a new employe { id, name, salary } </span></li>
  <li><strong>UPTADE - </strong><span>Update an exiting employee using an exiting id. </span></li>
  <li><strong>DELETE - </strong><span>Delete an employe using a exiting id. </span></li>
</ul>


<h3>HTTP REQUEST/RESPONSE</h3>
<h4>GET</h4>
<p>In order to get the all users we just need send a simple get request to the '/' route. Otherwhise in order to get 
a 1 employee only we must need to send the id in the following way '/1' - 1 is an example id -. </p>

<h5>Response: </h5>
<p>The server response will be a json with the all employees or one employee: </p>

<h4>POST </h4>
<p>In order to create a new employee the request must need the following information from the client: </p>

<ul>
  <li><strong>id - </strong><span>0 due to the id is auto_increment. </span></li>
  <li><strong>name - </strong><span>The max length is 45. </span></li>
  <li><strong>salary - </strong><span>An INT. </span></li>
</ul>

<h5>Response: </h5>
<p>The server response will be a json with the following message: 'Employee saved' </p>

<h4>PUT </h4>
<p>In order to update an employee we must need to send the id in the following way '/1' - 1 is an example id - </p>
<ul>
  <li><strong>name - </strong><span>The max length is 45. </span></li>
  <li><strong>salary - </strong><span>An INT. </span></li>
</ul>

<h5>Response: </h5>
<p>The server response will be a json with the following message: 'Employee { id } updated' </p>

<h4>DELETE </h4>
<p>In order to delete an employee we must need to send the id in the following way '/1' - 1 is an example id - </p>


<h5>Response: </h5>
<p>The server response will be a json with the following message: 'Employee { id } deleted' </p>


<h3>Copyright</h3>
<p>The all references of this project are in this YOUTUBE Free COURSE https://www.youtube.com/watch?v=p8CoR-wymQg</p>

