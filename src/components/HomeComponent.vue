<template>
  <div>
    <Header :title="title"/>

    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="10" offset="1">
          <ListView :bookResults="bookResults"/>
        </b-col>
      </b-row>
    </b-container>
    <div style="height:50px;"></div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ListView from "@/components/ListView.vue";

export default {
  name: "home",
  components: {
    Header,
    ListView
  },
  data() {
    return {
      title: "booj books",
      bookResults: []
    };
  },
  mounted() {
    // Fetch data but have to add a cors anywhere set up due to cors error. Prefixing the link solved this issue
    fetch(
      "https://cors-anywhere.herokuapp.com/https://www.librarything.com/api_getdata.php?userid=timspalding&showstructure=1&max=20&showCollections=1&showTags=1&booksort=title_REV&responseType=json",
      {
        method: "get"
      }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.bookResults = Object.values(jsonData.books);
      });
  }
};
</script>