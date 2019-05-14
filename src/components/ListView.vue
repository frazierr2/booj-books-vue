<template>
  <div id="listing-container">
    <h5 class="instruction-text">Hover over titles for more info:</h5>
    <b-button variant="outline-primary" @click="shuffleBooks">Shuffle List</b-button>
    <b-dropdown id="dropdown-1" variant="outline-success" text="Sort By" class="m-md-2">
      <b-dropdown-item @click="sortTitle">Title (A-Z)</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item @click="sortAuthor">Author</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item @click="sortDate">Release Date</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item @click="reverseList">Reverse List</b-dropdown-item>
    </b-dropdown>
    <b-button variant="outline-danger" @click="newBookForm = !newBookForm">Add New Book</b-button>

    <div v-if="newBookForm">
      <b-form inline @submit="addNewBook">
        <b-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Book Title"
          v-model="form.title"
        ></b-input>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input id="inline-form-input-username" placeholder="Author" v-model="form.author_fl"></b-input>
        </b-input-group>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input
            id="inline-form-input-username"
            placeholder="Publication Date"
            v-model="form.publicationdate"
          ></b-input>
        </b-input-group>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input id="inline-form-input-username" placeholder="Rating" v-model="form.rating"></b-input>
        </b-input-group>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0" style="width: 80%;">
          <b-input id="inline-form-input-username" placeholder="Cover URL" v-model="form.cover"></b-input>
        </b-input-group>

        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
    </div>

    <b-list-group>
      <b-list-group-item
        v-for="(book, index) in shuffledBooks"
        :key="index"
        @mouseover="selectedRow(index)"
      >
        <b-row>
          <b-col cols="9">{{ book.title }}</b-col>
          <b-col cols="3" v-show="isHovered">
            <b-row>
              <b-col class="p-0 details" cols="9" @click="getDetails(index)">Details</b-col>
              <b-col class="p-0 delete-icon" cols="3" @click="deleteRow(index)">
                <font-awesome-icon icon="trash"/>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "ListView",
  props: {
    bookResults: Array
  },
  data() {
    return {
      isHovered: true,
      shuffledBooks: [],
      results: [],
      newBookForm: false,
      form: {
        title: "",
        author_fl: "",
        publicationdate: "",
        rating: "",
        cover: ""
      }
    };
  },
  computed: {},
  watch: {
    bookResults: {
      immediate: true,
      handler() {
        this.shuffleBooks();
      }
    }
  },
  methods: {
    addNewBook(evt) {
      evt.preventDefault();
      let newBookObject = JSON.stringify(this.form);
      let parsedBookObject = JSON.parse(newBookObject);
      this.bookResults.push(parsedBookObject);
      this.newBookForm = false;
      this.form.title = "";
      this.form.author_fl = "";
      this.form.publicationdate = "";
      this.form.rating = "";
    },
    getDetails(index) {
      //   console.log(this.shuffledBooks[index]);
      let bookDetails = this.shuffledBooks[index];
      //   console.log(bookDetails.cover);
      this.$router.push({
        name: "details",
        params: { id: bookDetails }
      });
    },
    selectedRow(index) {
      this.bookResults[index];
      //   console.log(this.bookResults[index]);
    },
    // showDetails(index) {
    //   console.log(index);
    // },
    deleteRow(index) {
      this.$delete(this.shuffledBooks, index);
    },
    shuffleBooks() {
      let books = [...this.bookResults];
      this.shuffledBooks = _.shuffle(books);
    },
    sortTitle() {
      this.shuffledBooks = _.sortBy(this.shuffledBooks, book => book.title);
    },
    sortAuthor() {
      this.shuffledBooks = _.sortBy(this.shuffledBooks, book => book.author_fl);
    },
    sortDate() {
      this.shuffledBooks = _.sortBy(
        this.shuffledBooks,
        book => book.publicationdate
      );
    },
    reverseList() {
      this.shuffledBooks.reverse();
    }
  }
};
</script>


<style scoped>
.btn {
  margin: 10px;
}
.instruction-text {
  margin-top: 20px;
}
.list-group {
  margin-top: 15px;
}
.list-group-item {
  margin-bottom: 5px;
}
.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}
.details {
  font-size: 14px;
}
.delete-icon:hover {
  color: red;
}
</style>



