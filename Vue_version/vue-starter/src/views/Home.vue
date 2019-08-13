<template>

  <div class="home">
    
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
<nav class="nav-wrapper indigo">
  <div class="container">
    <a href="#" class="brand-logo ">KIT</a>
  <ul class="right hide-on-med-and-down">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#" class="btn-floating indigo darken-4">
      <i class="material-icons">notifications</i>
      </a></li>
      <li><span class="badge white-text pink new">5</span></li>
  </ul>
 
  </div>
</nav>
    <div class="row">
        <div class="col s12 l6">
        <div class="card">
          <div class="card-image">
            <img src="@/assets/Indiandishes.jpg">
             <a href="#" class="btn-floating pink pulse halfway-fab">
              <i class="material-icons">favorite</i>
            </a>
            </div>
           
          <div class="card-content">
            <span class="card-title">Mango & Chikpea Curry</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ipsa aut nulla accusantium ex dolorum suscipit, quisquam adipisci facilis sequi aliquid consectetur cupiditate numquam ea eos quia possimus molestiae debitis.</p>
          </div>
        </div>
        </div>
    <div class="col  m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title red darken-4">A modular, generic and fully customized framework</span>
<p class="flow-text">A modular, generic and fully customizable Front-end framework for energy-resource scheduling in smart grids</p>
        </div>
        <div class="card-action">
        
          <a href="#" class="btn waves-effect waves-light indigo ">
            <span>Go to Dashboard</span>
            <i class="material-icons left">assessment</i>
            </a>
            <a href="#" class="btn-floating pulse red right">
              <i class="material-icons">arrow_right_alt</i>
            </a>
        
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <h2>Collections</h2>
    <ul class="collection with-header">
      <li class="collection-header">Games</li>
      <li class="collection-item avatar">
        <span class="title">Zelda</span>
        <p class="grey-text">Open World</p>
        <a href="" class="secondary-content">
          <i class="material-icons blue-text">email</i>
        </a>
      </li>
      <li class="collection-item">Smash</li>
      <li class="collection-item">Party</li>
    </ul>
   
  </div>
  <div class="container">
    <h2>Modals</h2>
    <a href="" class="btn orange">Terms & Conditions</a>
    <div class="modal" id="terms">
      test
    </div>
  </div>

  <div>
        <div>{{myJson}}</div>
    </div>
  <div class="container col s12">
 <google-chart :data= "myJson" type='md-bar'></google-chart>
        </div>
        
  
 
  </div>
  
          
</template>
<style>

  .test  {
background: lightblue;
height: 120px;
margin: 4px;
  }

  nav .badge {
    position: relative;
    top: 20px;
    right: 20px;

  }


</style>
<script>
      import json from '../json/sp.json'
      export default{
          data(){
              return{
                  myJson: json
              }
          }
      }
</script>




