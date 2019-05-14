<template>
  <div>
    <h1>Book Details</h1>

    <b-row class="mt-5">
      <b-col>
        <img :src="bookDetails.cover ? bookDetails.cover : noImage " style="max-height:350px;">
      </b-col>

      <b-col style="margin:auto">
        <b-row>
          <b-col>
            <h2>
              <b>Title:</b>
            </h2>
            <h5>{{ bookDetails.title ? bookDetails.title:'Sorry! No title found' }}</h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h2>
              <b>Author:</b>
            </h2>
            <h5>{{ bookDetails.author_fl ? bookDetails.author_fl : 'Sorry! No author found'}}</h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h2>
              <b>Publication Date:</b>
            </h2>
            <h5>{{ bookDetails.publicationdate ? bookDetails.publicationdate : 'Sorry! No publication date found'}}</h5>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h2>
              <b>Rating:</b>
            </h2>
            <h5>{{ bookDetails.rating ? bookDetails.rating : 'Sorry! No ratings for this book'}}</h5>
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