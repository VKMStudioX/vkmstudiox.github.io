<template>
    <div class="info__content">
        <h2>
          <CommonIcon iconName="terminal" className="info__content-icon" />
          <VueWriter :array="['Hi! Welcome to my portfolio!']" />
        </h2>

        <span class="info__content-text">
          I'm a web developer after the re-branding (from automation engineer).
        </span>

        <span class="info__content-text">
          I'm in  
          <CommonIcon iconName="heart" className="info__content-icon" />
           with new web development - especially
          Front-End.</span
        >
        <span class="info__content-text">
          At last some years I used / had at least one project of popular
          JavaScript frameworks 
          (
            <CommonIcon iconName="vue" className="info__content-icon" /> & 
            <CommonIcon iconName="react" className="info__content-icon" /> &
            <CommonIcon iconName="angular" className="info__content-icon" />),
          but I'm totally in  <CommonIcon iconName="heart" className="info__content-icon" />
           with  <CommonIcon iconName="vue" className="info__content-icon" />.
        </span>

        <span class="info__content-text">
          I have a  
          <CommonIcon iconName="one" className="info__content-icon" />
           year commercial experience in 
            <CommonIcon iconName="js" className="info__content-icon" /> /
           <CommonIcon iconName="php" className="info__content-icon" /> 
           (in  <CommonIcon iconName="vue" className="info__content-icon" />
            &  <CommonIcon iconName="laravel" className="info__content-icon" />),
            but much more including self-learning (in pandemic times) and automation (non-ES6).
        </span>
      </div>
</template>