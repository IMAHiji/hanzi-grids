<template>
  <div>
    <span class="center-horizontal" />
    <span class="center-vertical" />
    <span class="left-diagonal" />
    <span class="right-diagonal" />
  </div>
</template>
<style>
.center-vertical {
    position: absolute;
    left:50%;
    top: 1px;
    width: 1px;
    height:100%;
    border: 0.5px dotted rgba(0,0,0,0.5);
  }
  .center-horizontal {
    position: absolute;
    top:50%;
    width: 100%;
    height:1px;
    border: 0.5px dotted rgba(0,0,0,0.5);
  }
  .left-diagonal{
    position: absolute;
    top:0;
    width: 142%;
    height:1px;
    border: 0.5px dotted rgba(0,0,0,0.5);
    transform: rotate(45deg);
    transform-origin:0 0;
  }
  .right-diagonal{
    position: absolute;
    bottom:0;
    width: 142%;
    height:1px;
    border: 0.5px dotted rgba(0,0,0,0.5);
    transform: rotate(-45deg);
    transform-origin:0 0;
  }
</style>
