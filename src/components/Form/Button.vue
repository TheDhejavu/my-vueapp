<template>
     <div class="form-group flex center text-center">
        <button class="ripple btn form-button has-shadow" :class="classNames" v-bind="$attrs" >{{ value }}</button>
    </div>
</template>

<script>
export default{
    name: "Button",
    inheritAttrs: false,
    props: {
        value: {
            type: String,
            required: true,
            default: 'submit'
        },
        classNames:{
            type:String,
        }
    }
}

</script>
<style lang="scss">
@import "../../styles/common.scss";

.btn{
      display:inline-block;
      margin:5px;
      border-radius:70px;
      border:none;
      transition: box-shadow 0.2s ease 0s, opacity 0.2s ease 0s;
      cursor:pointer;
      text-align:center;
      font-family:$primary-font-family;
  }
  .reset-btn{
    margin:0;
    padding:0;
    background:none;
    box-shadow:none;
  }
  .form-button{
        display: block;
        width: 100%;
        margin-top:20px;
        background:$primary-color;
        color:#fff;
        font-size:1.1rem;
        font-weight:600;
        padding:16px 0px;
    }
    .form-button.small{
        max-width:150px;
        font-size:0.8rem;
    }
  .btn.has-shadow{
      box-shadow: 0 5px 5px 0 rgba(0, 0,0, 0.09);
  }
  .btn:disabled{
    cursor:not-allowed;
    opacity:0.6;
    }
</style>
