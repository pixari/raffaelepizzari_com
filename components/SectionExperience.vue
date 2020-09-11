<template>
  <section class="o-section t-section">
    <div class="o-section__header-bg t-section__header" />
    <div class="o-section__content-bg t-section__content" />

    <div class="o-container">
      <div class="o-section__container">
        <header class="o-section__header t-section__header">
          <div class="o-content">
            <h2 class="o-section__heading">{{ $t('Experience') }}</h2>
            <div class="o-content__body o-section__description">{{ $t('Yes, I have been around.') }}</div>
          </div>
        </header>
        <!-- /o-section__header -->

        <div class="o-section__content t-section__content u-pb-0">
          <div class="a-experience-timeline c-timeline t-border-color">
            <div v-for="(ex, index) in experiences" :key="index" class="c-timeline__item">
              <div class="c-timeline__point t-timeline__point t-primary-bg" />
              <div class="o-content">
                <div class="o-grid">
                  <div class="o-grid__col-md-5">
                    <div class="c-work__timeframe">{{ ex.from }} &ndash; {{ ex.to }}</div>
                    <h3 class="c-work__heading">{{ ex.company }}</h3>
                    <h4 class="c-work__title">{{ ex.role }}</h4>
                    <div class="c-work__location">{{ ex.location }}</div>
                  </div>
                  <div class="o-grid__col-md-7">
                    <p>{{ ex.description }}</p>
                  </div>
                </div>
                <!-- /o-grid -->
              </div>
              <!-- /o-content -->
            </div>
            <!-- /c-timeline__item -->
          </div>
          <!-- /c-timeline -->
        </div>
        <!-- /o-section__content -->
      </div>
      <!-- /o-section__container -->
    </div>
    <!-- /o-container -->
  </section>
  <!-- /o-section -->
</template>


<script>
export default {
  data() {
    return {
      experiences: [
        {
          from: "05.2020",
          to: this.$t("Present"),
          company: "SinnerSchrader AG, part of Accenture Interactive",
          role: "Senior Product Engineer",
          description: this.$t("sinnerschrader_description"),
          location: this.$t("Munich, DE"),
        },
        {
          from: "06.2018",
          to: this.$t("Present"),
          company: "xbAV AG",
          role: "Front-End Developer",
          description: this.$t("xbav_description"),
          location: this.$t("Munich, DE"),
        },
        {
          from: "10.2015",
          to: "06.2018",
          company: "WIGeoGIS GmbH",
          role: "Full-Stack Developer",
          description: this.$t("wigeogis_description"),
          location: this.$t("Munich, DE"),
        },
        {
          from: "10.2013",
          to: "10.2015",
          company: "Safelog Gmbh",
          role: "Software Developer",
          description: this.$t("safelog_description"),
          location: this.$t("Munich, DE"),
        },
        {
          from: "06.2007",
          to: "02.2014",
          company: "EgoRego srl",
          role: "CEO and Full-Stack Developer",
          description: this.$t("egorego_description"),
          location: this.$t("Rome, IT"),
        },
        {
          from: "2011",
          to: "2012",
          company: "tNotice.com",
          role: "Full-Stack Developer",
          description: this.$t("tnotice_description"),
          location: this.$t("Rome, IT"),
        },
        {
          from: "02.2012",
          to: "02.2014",
          company: "Lumsa University",
          role: "Teacher",
          description: this.$t("lumsa_t_description"),
          location: this.$t("Rome, IT"),
        },
        {
          from: "02.2013",
          to: "02.2014",
          company: "Lumsa University",
          role: "Academic Tutor",
          description: this.$t("lumsa_a_description"),
          location: this.$t("Rome, IT"),
        },
        {
          from: "01.2006",
          to: "01.2007",
          company: "Gubbernet srl",
          role: "Web Architect and Account Executive",
          description: this.$t("gubbernet_description"),
          location: this.$t("Rome, IT"),
        },
        {
          from: "04.2004",
          to: "01.2006",
          company: "CILEA",
          role: "Full-Stack Developer",
          description: this.$t("cilea_description"),
          location: this.$t("Rome, IT"),
        },
      ],
    };
  },
};
</script>
