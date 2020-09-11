<template>
  <section class="o-section  t-section  ">
    <div class="o-section__header-bg  t-section__header" />
    <div class="o-section__content-bg  t-section__content" />

    <div class="o-container">
      <div class="o-section__container">
        <header class="o-section__header  t-section__header">
          <div class="o-content">
            <h2 class="o-section__heading">
              {{ $t('Intro') }}
            </h2>
            <div class="o-content__body  o-section__description">
              {{ $t('What I am all about.') }}
            </div>
          </div>
        </header>

        <div class="o-section__content  t-section__content  ">  
          <div class="o-content">
            <div class="c-intro">
              <div
                v-if="$i18n.locale === 'en'"
                class="o-content__body"
              >
                <p>
                  I’m a highly motivated <strong>Front-End Developer</strong> with over 16 years of experience, especially <strong>passionate about JavaScript</strong>.
                </p>
                <p>
                  I was <strong>founder and CEO of the EgoRego Internet Company</strong>, based in Rome (Italy), founded in 2007. We've made a reputation for planning successful communication strategies, coding rich Websites, increasing business through social media marketing. I learned how to efficiently manage a project, how to lead a team and deal with customers.
                </p>
                <p>
                  Currently I work as <strong>Principal Product Engineer</strong> for <a
                    href="https://www.accenture.com/de-de/about/accenture-song-index"
                    target="_blank"
                    aria-label="Accenture Song Build Home Page"
                    rel="noreferrer"
                  >Accenture Song Build</a> in Munich, Germany.
                </p>
                <p>
                  I truly believe in the <strong>value of sharing knowledge</strong>. <br>
                  That's why I enjoy contributing to <strong>open source projects</strong>, supporting other developers as <strong>mentor</strong>, organising workshops and giving talks.
                </p>
                <p>
                  I believe in <strong>teamwork</strong>. Different team members contribute different perspectives and the synergy between team members can produce creative and productive results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>