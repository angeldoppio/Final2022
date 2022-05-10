<template>
  <info-layout>
    <form class="bg-white shadow-md rounded px-8 mt-8 pt-6 pb-8 mb-4">
      <h1 class="text-bold text-red-500 text-center">ลงทะเบียนรับวัคซีน</h1>
      <h2 class="text-red-500 text-center">Register to be Vaccinated</h2>
      <p class="text-center">คุณสามารถลงทะเบียนได้ <span class="text-red-500">2</span> ท่าน</p>
      <div class="mt-3">
         <label class="block text-gray-700 text-m font-bold" for="place">
        กรุณาเลือกสถานที่ลงทะเบียนวัคซีน
      </label>
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" placeholder="กรุณาเลือกศูนย์วัคซีน" v-model="vaccination_center">
          <option>กรุณาเลือกศูนย์วัคซีน</option>
          <option>ศูนย์ฉีดวัคซีนกลางบางซื่อ (Centralize Vaccination Center)</option>
        </select> 
      </div>
    <div class="mt-4">
      <label class="block text-gray-700 text-m font-bold" for="place">
        กรุณาเลือก การลงทะเบียนวัคซีน
      </label>
      <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" v-model="choice_vaccine">
          <option>เข็ม3 สำหรับบุคคลทั่วไปและชาวต่างชาติ ที่เคยได้รับวัคซีนครบ 2เข็ม</option>
          <option>เข็ม4 สำหรับบุคคลทั่วไป และชาวต่างชาติ ที่เคยได้รับวัคซีน 3 เข็ม ครบ 120วัน (ทุกชนิดวัคซีน)</option>
        </select>
    </div>
   
    <div class="mt-6 w-full">
      <div class="grids grid-col-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Prename">
       คำนำหน้าชื่อ<span class="text-red-500">*</span>
      </label>
      <label class="block text-gray-700 text-sm font-bold" for="Prename">
       Name Title <span class="text-red-500">*</span>
      </label>
       <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" v-model="prename">
          <option>นาย</option>
          <option>นาง</option>
          <option>นางสาว</option>
          <option>เด็กหญิง</option>
          <option>เด็กชาย</option>
        </select>
     </div>
    </div>
    <div class="mt-4 w-full">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Gender">
       เพศ<span class="text-red-500">*</span>
      </label>
      <label class="block text-gray-700 text-sm font-bold" for="Gender">
       Gender <span class="text-red-500">*</span>
      </label>
      <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" v-model="gender">
          <option>หญิง</option>
          <option>ชาย</option>
        </select>
    </div>
    <div class="mt-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="FirstName">
       ชื่อ<span class="text-red-500">*</span>
      </label>
      <label class="block text-gray-700 text-sm font-bold" for="FirstName">
      First Name <span class="text-red-500">*</span>
      </label>
      <input type="text" class="w-full px-4 py-2 border-2 border-gray-300 leading-tight" v-model="firstname">
    </div>
    <div class="mt-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="LastName">
       นามสกุล<span class="text-red-500">*</span>
      </label>
      <label class="block text-gray-700 text-sm font-bold" for="LastName">
      Last Name <span class="text-red-500">*</span>
      </label>
      <input type="text" class="w-full px-4 py-2 border-2 border-gray-300  leading-tight" v-model="lastname">
    </div>

     <div class="mt-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="LastName">
       ว/ด/ป เกิด<span class="text-red-500">*</span>
      </label>
      <label class="block text-gray-700 text-sm font-bold" for="LastName">
      Date of Birth<span class="text-red-500">*</span>
      </label>
      <input type="date" class="w-full px-4 py-2 border-2 border-gray-300  leading-tight" v-model="dob">
    </div>

     <div class="mt-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="LastName">
       เบอร์มือถือ<span class="text-red-500">*</span>
      </label>
      <label class="block text-gray-700 text-sm font-bold" for="LastName">
      Telephone Number<span class="text-red-500">*</span>
      </label>
      <input type="text" class="w-full px-4 py-2 border-2 border-gray-300  leading-tight" v-model="Phone">
    </div>

    <div class="mt-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="LastName">
       รหัสบัตรประชาชน 13 หลัก<span class="text-red-500">*</span>
      </label>
      <label class="block text-gray-700 text-sm font-bold" for="LastName">
     ID NO.<span class="text-red-500">*</span>
      </label>
      <input type="text" class="w-full px-4 py-2 border-2 border-gray-300  leading-tight" v-model="idNum">
    </div>

    <div class="mt-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="LastName">
       ที่อยู่ที่ติดต่อได้<span class="text-red-500">*</span>
      </label>
      <label class="block text-gray-700 text-sm font-bold" for="LastName">
     Address<span class="text-red-500">*</span>
      </label>
      <label class="block text-gray-700 text-sm font-bold" for="LastName">
     บ้านเลขที่<span class="text-red-500">*</span>
      </label>
      <input type="text" class="w-full px-4 py-2 border-2 border-gray-300  leading-tight" v-model="homeNo">

      <label class="block text-gray-700 text-sm font-bold" for="LastName">
      ตำบล<span class="text-red-500">*</span>
      </label>
      <input type="text" class="w-full px-4 py-2 border-2 border-gray-300  leading-tight" v-model="district">

      <label class="block text-gray-700 text-sm font-bold" for="LastName">
      เขต<span class="text-red-500">*</span>
      </label>
      <input type="text" class="w-full px-4 py-2 border-2 border-gray-300  leading-tight" v-model="ket">
      <label class="block text-gray-700 text-sm font-bold" for="LastName">
      จังหวัด<span class="text-red-500">*</span>
      </label>
      <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" v-model="province">
           <option value="" selected>-------------------------------------------- เลือกจังหวัด ------------------------------------</option>
            <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
            <option value="กระบี่">กระบี่ </option>
            <option value="กาญจนบุรี">กาญจนบุรี </option>
            <option value="กาฬสินธุ์">กาฬสินธุ์ </option>
            <option value="กำแพงเพชร">กำแพงเพชร </option>
            <option value="ขอนแก่น">ขอนแก่น</option>
            <option value="จันทบุรี">จันทบุรี</option>
            <option value="ฉะเชิงเทรา">ฉะเชิงเทรา </option>
            <option value="ชัยนาท">ชัยนาท </option>
            <option value="ชัยภูมิ">ชัยภูมิ </option>
            <option value="ชุมพร">ชุมพร </option>
            <option value="ชลบุรี">ชลบุรี </option>
            <option value="เชียงใหม่">เชียงใหม่ </option>
            <option value="เชียงราย">เชียงราย </option>
            <option value="ตรัง">ตรัง </option>
            <option value="ตราด">ตราด </option>
            <option value="ตาก">ตาก </option>
            <option value="นครนายก">นครนายก </option>
            <option value="นครปฐม">นครปฐม </option>
            <option value="นครพนม">นครพนม </option>
            <option value="นครราชสีมา">นครราชสีมา </option>
            <option value="นครศรีธรรมราช">นครศรีธรรมราช </option>
            <option value="นครสวรรค์">นครสวรรค์ </option>
            <option value="นราธิวาส">นราธิวาส </option>
            <option value="น่าน">น่าน </option>
            <option value="นนทบุรี">นนทบุรี </option>
            <option value="บึงกาฬ">บึงกาฬ</option>
            <option value="บุรีรัมย์">บุรีรัมย์</option>
            <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์ </option>
            <option value="ปทุมธานี">ปทุมธานี </option>
            <option value="ปราจีนบุรี">ปราจีนบุรี </option>
            <option value="ปัตตานี">ปัตตานี </option>
            <option value="พะเยา">พะเยา </option>
            <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา </option>
            <option value="พังงา">พังงา </option>
            <option value="พิจิตร">พิจิตร </option>
            <option value="พิษณุโลก">พิษณุโลก </option>
            <option value="เพชรบุรี">เพชรบุรี </option>
            <option value="เพชรบูรณ์">เพชรบูรณ์ </option>
            <option value="แพร่">แพร่ </option>
            <option value="พัทลุง">พัทลุง </option>
            <option value="ภูเก็ต">ภูเก็ต </option>
            <option value="มหาสารคาม">มหาสารคาม </option>
            <option value="มุกดาหาร">มุกดาหาร </option>
            <option value="แม่ฮ่องสอน">แม่ฮ่องสอน </option>
            <option value="ยโสธร">ยโสธร </option>
            <option value="ยะลา">ยะลา </option>
            <option value="ร้อยเอ็ด">ร้อยเอ็ด </option>
            <option value="ระนอง">ระนอง </option>
            <option value="ระยอง">ระยอง </option>
            <option value="ราชบุรี">ราชบุรี</option>
            <option value="ลพบุรี">ลพบุรี </option>
            <option value="ลำปาง">ลำปาง </option>
            <option value="ลำพูน">ลำพูน </option>
            <option value="เลย">เลย </option>
            <option value="ศรีสะเกษ">ศรีสะเกษ</option>
            <option value="สกลนคร">สกลนคร</option>
            <option value="สงขลา">สงขลา </option>
            <option value="สมุทรสาคร">สมุทรสาคร </option>
            <option value="สมุทรปราการ">สมุทรปราการ </option>
            <option value="สมุทรสงคราม">สมุทรสงคราม </option>
            <option value="สระแก้ว">สระแก้ว </option>
            <option value="สระบุรี">สระบุรี </option>
            <option value="สิงห์บุรี">สิงห์บุรี </option>
            <option value="สุโขทัย">สุโขทัย </option>
            <option value="สุพรรณบุรี">สุพรรณบุรี </option>
            <option value="สุราษฎร์ธานี">สุราษฎร์ธานี </option>
            <option value="สุรินทร์">สุรินทร์ </option>
            <option value="สตูล">สตูล </option>
            <option value="หนองคาย">หนองคาย </option>
            <option value="หนองบัวลำภู">หนองบัวลำภู </option>
            <option value="อำนาจเจริญ">อำนาจเจริญ </option>
            <option value="อุดรธานี">อุดรธานี </option>
            <option value="อุตรดิตถ์">อุตรดิตถ์ </option>
            <option value="อุทัยธานี">อุทัยธานี </option>
            <option value="อุบลราชธานี">อุบลราชธานี</option>
            <option value="อ่างทอง">อ่างทอง </option>
            <option value="อื่นๆ">อื่นๆ</option>
        </select>
     

      <label class="block text-gray-700 text-sm font-bold" for="LastName">
      รหัสไปรษณีย์<span class="text-red-500">*</span>
      </label>
      <input type="text" class="w-1/2 px-4 py-2 border-2 border-gray-100  leading-tight" v-model="code">
    </div>


    <div class="mt-6 flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="register()">
       ยืนยันข้อมูล/submit
      </button>
    </div>
  </form>
  </info-layout>
</template>

<script>
import axios from "axios";
import InfoLayout from './layouts/info.vue'
// @ is an alias to /src
export default {
  name: "Home",
  components :{
    InfoLayout
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      code: "",
      vaccination_center: "",
      prename: "",
      gender: "",
      dob: "",
      province: "",
      district: "",
      ket: "",
      Phone: "",
      idNum: "",
      homeNo: "",
      choice_vaccine:""

      
    };
  },
  methods: {
    register() {
      axios
          .post("http://localhost:3001/vaccines", {
            vaccination_center: this.vaccination_center,
            choice_vaccine: this.choice_vaccine,
            title: this.prename,
            first_name: this.firstname,
            last_name: this.lastname,
            dob: this.dob,
            phone_number: this.Phone,
            id_card: this.idNum,
            address: this.homeNo,
            province: this.province,
            district: this.district,
            subdistrict: this.ket,
            code: this.code
          })
    }
  }
};
</script>
<style scoped>
    .card_action {
      position: absolute;
      top: 55.5%;
      right: 10px;
    }
    .card_action button {
      width: 30px;
      height: 30px;
    }
</style>
