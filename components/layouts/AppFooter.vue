<template>
  <v-footer >

    <div class="w-full" style="background-color: #E5E6EC">
      <v-btn
        v-for="link in ['TOPIC 1','TOPIC 1','TOPIC 1','TOPIC 1',]"
        :key="link"
        color="black"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
    </div>

    <v-row justify="space-around" class="w-full px-4 m-0 border-b-1 border-inherit">
      <v-col
        cols="12"
        md="3"
      >
        <h2 class="mb-1 font-semibold text-gray-900 dark:text-white">Legal</h2>
        <ul class="dark:text-gray-400">
          <li class="mb-1">
            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
          </li>
          <li>
            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
          </li>
          <li class="mb-1">
            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
          </li>
          <li>
            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
          </li>
          <li class="mb-1">
            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
          </li>
          <li>
            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
          </li>
        </ul>

      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <h2 class="mb-1 font-semibold text-gray-900 dark:text-white">Legal</h2>
        <ul class="dark:text-gray-400">
          <li class="mb-1">
            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
          </li>
          <li>
            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
          </li>
          <li class="mb-1">
            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
          </li>
          <li>
            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
          </li>
          <li class="mb-1">
            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
          </li>
          <li>
            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
          </li>
        </ul>

      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <h2 class="mb-1 font-semibold text-gray-900 dark:text-white">Legal</h2>
        <ul class="dark:text-gray-400">
          <li class="mb-1">
            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
          </li>
          <li>
            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
          </li>
          <li class="mb-1">
            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
          </li>
          <li>
            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
          </li>
          <li class="mb-1">
            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
          </li>
          <li>
            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
          </li>
        </ul>

      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <h2 class="mb-1 font-semibold text-gray-900 dark:text-white">Legal</h2>
        <ul class="dark:text-gray-400">
          <li class="mb-1">
            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
          </li>
          <li>
            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
          </li>
          <li class="mb-1">
            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
          </li>
          <li>
            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
          </li>
          <li class="mb-1">
            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
          </li>
          <li>
            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
          </li>
        </ul>

      </v-col>
    </v-row>

    <v-row justify="space-around" class="w-full px-4 m-0 text-sx">
      <v-col
        cols="12"
        md="2"
      >
        <div class="">Chịu trách nhiệm nội dung: Trần Mạnh Hiệp</div>
      </v-col>
      <v-col
        cols="12"
        md="2"
      >
        <div>© 2022 Công ty Cổ phần MXH Tinh Tế</div>
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <div>Địa chỉ: Số 70 Bà Huyện Thanh Quan, P. Võ Thị Sáu, Quận 3, TPHCM</div>
      </v-col>
      <v-col
        cols="12"
        md="2"
      >
        <div>Số điện thoại: 02862713156</div>
      </v-col>
      <v-col
        cols="12"
        md="2"
      >
        <div>MST: 0313255119</div>
      </v-col>
      <v-col
        cols="12"
        md="12"
      >
        <div>Giấy phép thiết lập MXH số 11/GP-BTTTT, Ký ngày: 08/01/2019</div>
      </v-col>
    </v-row>
  </v-footer>

</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style>
.v-footer {
  padding: 0px;
}

.v-application ul {
  padding-left: 0px;
}

.row {
  margin: 0px;
}

.col-12 > div {
  text-align: center !important;
  font-size: 13px;
  font-weight: 500px;
}

</style>
