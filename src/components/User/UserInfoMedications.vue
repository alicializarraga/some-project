<template>
  <div class="user-info-medications">
    <h1>{{ msg }}</h1>
    <form>
       <input type="checkbox" id="test5" />
       <label for="test5">I'm glad I don't take any medications</label>
       <p><label class="plainText"><strong>Kindly let us know about the medications you are taking</strong></label></p>

       <div>
         <ul class="chk">
           <li>
             <input type="checkbox" id="ch1" />
             <label for="ch1">Antibiotics</label>
           </li>
           <li>
             <input type="checkbox" id="ch2" />
             <label for="ch2">Cholesterol Medications</label>
           </li>
           <li>
             <input type="checkbox" id="ch3" />
             <label for="ch3">Acid blocking Medications</label>
           </li>
           <li>
             <input type="checkbox" id="ch4" />
             <label for="ch4">Immuno-suppressant Medication (Cyclosporin)</label>
           </li>
           <li>
             <input type="checkbox" id="ch5" />
             <label for="ch5">Anti-depressants</label>
           </li>
           <li>
             <input type="checkbox" id="ch6" />
             <label for="ch6">Immuno-suppressant Medication (Tacrolimus)</label>
           </li>
           <li>
             <input type="checkbox" id="ch7" />
             <label for="ch7">Anti-arrhythmic (Amiodarone)</label>
           </li>
           <li>
             <input type="checkbox" id="ch8" />
             <label for="ch8">Immuno-suppressant Medication (Prednisone)</label>
           </li>
           <li>
             <input type="checkbox" id="ch9" />
             <label for="ch9">Anti-arrhythmic (Other)</label>
           </li>
           <li>
             <input type="checkbox" id="ch10" />
             <label for="ch10">Immuno-suppressant Medication (Other)</label>
           </li>
           <li>
             <input type="checkbox" id="ch11" />
             <label for="ch11">Anti-pyschotic</label>
           </li>
           <li>
             <input type="checkbox" id="ch12" />
             <label for="ch12">Diuretics (Lasix)</label>
           </li>
           <li>
             <input type="checkbox" id="ch13" />
             <label for="ch13">Attention Deficit Disorder Medications</label>
           </li>
           <li>
             <input type="checkbox" id="ch14" />
             <label for="ch14">Diuretics (Hydrochlorothiazide)</label>
           </li>
           <li>
             <input type="checkbox" id="ch15" />
             <label for="ch15">Asthma Medications</label>
           </li>
           <li>
             <input type="checkbox" id="ch16" />
             <label for="ch16">Diuretis (Other)</label>
           </li>
           <li>
             <input type="checkbox" id="ch17" />
             <label for="ch17">Allergy Medications</label>
           </li>
           <li>
             <input type="checkbox" id="ch18" />
             <label for="ch18">Sleep Medications</label>
           </li>
           <li>
             <input type="checkbox" id="ch20" />
             <label for="ch20">Birth Control</label>
           </li>
           <li>
             <input type="checkbox" id="ch21" />
             <label for="ch21">Pain Medications (Hydrocodone)</label>
           </li>
           <li>
             <input type="checkbox" id="ch22" />
             <label for="ch22">Blood Thinner (Warfarin)</label>
           </li>
           <li>
             <input type="checkbox" id="ch23" />
             <label for="ch23">Pain Medications (Tramadol)</label>
           </li>
           <li>
             <input type="checkbox" id="ch24" />
             <label for="ch24">Blood Thinner (Xeralto)</label>
           </li>
           <li>
             <input type="checkbox" id="ch25" />
             <label for="ch25">Pain Medications (Ibuprofen)</label>
           </li>
           <li>
             <input type="checkbox" id="ch26" />
             <label for="ch26">Blood Thinner (Paradaxa)</label>
           </li>
           <li>
             <input type="checkbox" id="ch27" />
             <label for="ch27">Pain Medications (Naproxen)</label>
           </li>
           <li>
             <input type="checkbox" id="ch28" />
             <label for="ch28">Blood Thinner (Aspirine)</label>
           </li>
           <li>
             <input type="checkbox" id="ch29" />
             <label for="ch29">Pain Medications (Other)</label>
           </li>
           <li>
             <input type="checkbox" id="ch30" />
             <label for="ch30">Blood Thinner (Other)</label>
           </li>
           <li>
             <input type="checkbox" id="ch31" />
             <label for="ch31">Supplements</label>
           </li>
           <li>
             <input type="checkbox" id="ch32" />
             <label for="ch32">Blood Pressure Medications</label>
           </li>
           <li>
             <input type="checkbox" id="ch33" />
             <label for="ch33">_____________</label>
           </li>
         </ul>
       </div>
    </form>
    <div class="row">
      <div class="col s12">
        <router-link class="btn" to="medical-history">Continue</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-info-medications',
  data () {
    return {
      msg: 'Medications'
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
