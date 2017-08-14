<template>
  <div class="user-info-family-history">
    <h1>{{ msg }}</h1>

    <form>
       <input type="checkbox" id="test5" />
       <label for="test5">-userName- dos not have any family member diagnosed with any medical conditions</label>
       <p><label class="plainText"><strong>Kindly indicate which conditions a family member has been diagnosed with: </strong></label></p>

       <div>
         <ul class="chk">
           <li>
             <input type="checkbox" id="ch1" />
             <label for="ch1">Alzheimers</label>
           </li>
           <li>
             <input type="checkbox" id="ch2" />
             <label for="ch2">Asthma</label>
           </li>
           <li>
             <input type="checkbox" id="ch3" />
             <label for="ch3">Cancer</label>
           </li>
           <li>
             <input type="checkbox" id="ch4" />
             <label for="ch4">Coronary artery disease (cad)</label>
           </li>
           <li>
             <input type="checkbox" id="ch5" />
             <label for="ch5">Diabetes</label>
           </li>
           <li>
             <input type="checkbox" id="ch6" />
             <label for="ch6">Heart attack</label>
           </li>
           <li>
             <input type="checkbox" id="ch7" />
             <label for="ch7">High cholesterol</label>
           </li>
           <li>
             <input type="checkbox" id="ch8" />
             <label for="ch8">Hypertension</label>
           </li>
           <li>
             <input type="checkbox" id="ch9" />
             <label for="ch9">Kidney disease</label>
           </li>
           <li>
             <input type="checkbox" id="ch10" />
             <label for="ch10">Migraines</label>
           </li>
           <li>
             <input type="checkbox" id="ch11" />
             <label for="ch11">Osteoporosis</label>
           </li>
           <li>
             <input type="checkbox" id="ch12" />
             <label for="ch12">Stroke</label>
           </li>
           <li>
             <input type="checkbox" id="ch13" />
             <label for="ch13">______________</label>
           </li>
         </ul>
       </div>

    </form>
    <div class="row">
      <div class="col s12">
        <router-link class="btn" to="questions">Continue</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'user-info-family-history',
  data () {
    return {
      msg: 'Family History'
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
