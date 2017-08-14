<template>
  <div class="user-info-allergies">
    <h1>{{ msg }}</h1>
    <form>
       <input type="checkbox" id="test5" />
       <label for="test5">Patient does not have any allergies</label>
       <p><label class="plainText"><strong>Please indicate any medications -UserName- is allergic to</strong></label></p>

       <div>
         <ul class="chk">
           <li>
             <input type="checkbox" id="ch1" />
             <label for="ch1">Amoxicillin</label>
           </li>
           <li>
             <input type="checkbox" id="ch2" />
             <label for="ch2">Aspirin</label>
           </li>
           <li>
             <input type="checkbox" id="ch3" />
             <label for="ch3">Azithromycin (Zithromax)</label>
           </li>
           <li>
             <input type="checkbox" id="ch4" />
             <label for="ch4">Clarithromycin (Biaxin)</label>
           </li>
           <li>
             <input type="checkbox" id="ch5" />
             <label for="ch5">Ciprofloxacin</label>
           </li>
           <li>
             <input type="checkbox" id="ch6" />
             <label for="ch6">Codeine</label>
           </li>
           <li>
             <input type="checkbox" id="ch7" />
             <label for="ch7">Doxycycline</label>
           </li>
           <li>
             <input type="checkbox" id="ch8" />
             <label for="ch8">Erythromycin</label>
           </li>
           <li>
             <input type="checkbox" id="ch9" />
             <label for="ch9">Ibuprofen (Advil, Motrin, Midol)</label>
           </li>
           <li>
             <input type="checkbox" id="ch10" />
             <label for="ch10">Iodine</label>
           </li>
           <li>
             <input type="checkbox" id="ch11" />
             <label for="ch11">Lidocaine</label>
           </li>
           <li>
             <input type="checkbox" id="ch12" />
             <label for="ch12">Morphine</label>
           </li>
           <li>
             <input type="checkbox" id="ch13" />
             <label for="ch13">Naproxen (Aleve)</label>
           </li>
           <li>
             <input type="checkbox" id="ch14" />
             <label for="ch14">Penicillin</label>
           </li>
           <li>
             <input type="checkbox" id="ch15" />
             <label for="ch15">Oxycodone (Percocet)</label>
           </li>
           <li>
             <input type="checkbox" id="ch16" />
             <label for="ch16">Sulfonamide</label>
           </li>
           <li>
             <input type="checkbox" id="ch17" />
             <label for="ch17">Tetracycline</label>
           </li>
           <li>
             <input type="checkbox" id="ch18" />
             <label for="ch18">______________</label>
           </li>
           <li>
             <input type="checkbox" id="ch19" />
             <label for="ch19">______________</label>
           </li>

         </ul>
       </div>

       <div class="noChk">
         <label class="plainText"><strong>Please indicate any medications -UserName- is allergic to</strong></label></p>
       </div>

       <div>
         <ul class="chk">
           <li>
             <input type="checkbox" id="ch20" />
             <label for="ch20">Egg</label>
           </li>
           <li>
             <input type="checkbox" id="ch21" />
             <label for="ch21">Latex</label>
           </li>
           <li>
             <input type="checkbox" id="ch22" />
             <label for="ch22">Peanuts</label>
           </li>
           <li>
             <input type="checkbox" id="ch23" />
             <label for="ch23">Shellfish</label>
           </li>
           <li>
             <input type="checkbox" id="ch24" />
             <label for="ch24">Dairy</label>
           </li>
           <li>
             <input type="checkbox" id="ch25" />
             <label for="ch25">_______</label>
           </li>
         </ul>
       </div>
    </form>
    <div class="row">
      <div class="col s12">
        <router-link class="btn" to="medications">Continue</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-info-allergies',
  data () {
    return {
      msg: 'Allergies'
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
