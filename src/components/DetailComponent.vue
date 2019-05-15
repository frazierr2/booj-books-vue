<template>
  <div>
    <img class="booj-logo" src="http://www.booj.com/img/booj-triangle.png" alt>
    <h1 id="details-title">Book Details</h1>

    <b-row id="detail-container" class="mt-5">
      <b-col cols="12" md="6">
        <img class="book-image" :src="bookDetails.cover ? bookDetails.cover : noImage ">
      </b-col>

      <b-col style="margin-top:3%;" cols="12" md="6">
        <b-row>
          <b-col>
            <h2>
              <b class="detail-header-text">Title:</b>
            </h2>
            <h5
              class="details-text"
            >{{ bookDetails.title ? bookDetails.title:'Sorry! No title found' }}</h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h2>
              <b class="detail-header-text">Author:</b>
            </h2>
            <h5
              class="details-text"
            >{{ bookDetails.author_fl ? bookDetails.author_fl : 'Sorry! No author found'}}</h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h2>
              <b class="detail-header-text">Publication Date:</b>
            </h2>
            <h5
              class="details-text"
            >{{ bookDetails.publicationdate ? bookDetails.publicationdate : 'Sorry! No publication date found'}}</h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h2>
              <b class="detail-header-text">Rating:</b>
            </h2>
            <h5
              class="details-text"
            >{{ bookDetails.rating ? bookDetails.rating : 'Sorry! No ratings for this book'}}</h5>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookDetails: this.$route.params.id,
      url: this.$route.params.id.cover,
      noImage:
        "http://www.theemailcompany.com/wp-content/uploads/2016/02/no-image-placeholder-big.jpg"
    };
  }
};
</script>

<style scoped>
.booj-logo {
  width: 15%;
}
#detail-container {
  /* height: 100vh; */
}
#details-title {
  color: white;
}
.book-image {
  max-height: 450px;
}
.detail-header-text {
  color: white;
}
.details-text {
  color: #d5d8dc;
}
@media only screen and (max-width: 767px) {
  #detail-container {
    height: auto;
  }
}
@media only screen and (max-width: 767px) {
  #detail-container {
    height: auto;
  }
  .book-image {
    max-height: 300px;
  }
  .detail-header-text {
    font-size: 1.5rem;
  }
  .detail-text {
    font-size: 1.15rem;
  }
}
</style>