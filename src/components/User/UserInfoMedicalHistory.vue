<template>
  <div class="user-info-medical-history">
    <h1>{{ msg }}</h1>
    <form>
       <input type="checkbox" id="test5" />
       <label for="test5">-UserName- has not been diagnosed with any medical conditions</label>
       <p><label class="plainText"><strong>Kindly check any medical conditions -userName- has been diagnosed with</strong></label></p>

       <div>
         <ul class="chk">
           <li>
             <input type="checkbox" id="ch1" />
             <label for="ch1">Acid reflux</label>
           </li>
           <li>
             <input type="checkbox" id="ch2" />
             <label for="ch2">Asthma</label>
           </li>
           <li>
             <input type="checkbox" id="ch3" />
             <label for="ch3">Blood clots</label>
           </li>
           <li>
             <input type="checkbox" id="ch4" />
             <label for="ch4">Cancer</label>
           </li>
           <li>
             <input type="checkbox" id="ch5" />
             <label for="ch5">Coronary artery disease (cad)</label>
           </li>
           <li>
             <input type="checkbox" id="ch6" />
             <label for="ch6">Diabetes</label>
           </li>
           <li>
             <input type="checkbox" id="ch7" />
             <label for="ch7">Seizures</label>
           </li>
           <li>
             <input type="checkbox" id="ch8" />
             <label for="ch8">Heart attack</label>
           </li>
           <li>
             <input type="checkbox" id="ch9" />
             <label for="ch9">Hypertension</label>
           </li>
           <li>
             <input type="checkbox" id="ch10" />
             <label for="ch10">Kidney disease</label>
           </li>
           <li>
             <input type="checkbox" id="ch11" />
             <label for="ch11">Stomach ulcer</label>
           </li>
           <li>
             <input type="checkbox" id="ch12" />
             <label for="ch12">Stroke</label>
           </li>
           <li>
             <input type="checkbox" id="ch13" />
             <label for="ch13">Thyroid disease</label>
           </li>

             <input type="checkbox" id="ch19" />
             <label for="ch19">______________</label>
           </li>

         </ul>
       </div>

    </form>
    <div class="row">
      <div class="col s12">
        <router-link class="btn" to="procedures">Continue</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'user-info-medical-history',
  data () {
    return {
      msg: 'Medical History'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .plainText {
    color: #46B4BB;
    font-size: 18px;
  }

  .chk li
  {
    display: block;
    float: left;
    width: 50%;
  }

  .noChk {
    display: block;
    float: left;
    width: 100%;
  }
</style>
