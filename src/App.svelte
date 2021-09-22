<main>
  <div class="clock">
    <Clock />
    <div>Это SVG-часы - динамический Свелт-компонент.</div>
  </div>
  <h1>
    <span class="me"><Me options={{style:{height: '15rem'}}} /></span>
    <span class="svelt-color font-effect-3d-float">{head.title}</span>
  </h1>

  <h2>{ main_post.title }</h2>
  <div class="first-post">{@html main_post.html || '' }</div>
  
  <div bind:this="{Refs.scroll}" class="  { ready ? 'ss-container z-depth-3' : 'hide' }">{ #each posts as p }
    <div class="post">
        <h3><a  on:click={ Click(p) }  href="javascript:" class="gr-color">{ p.title }</a></h3>
        <p>{@html p.html }</p>
        {#if !!p.code }<code class="code">{ p.code }</code>{/if}
    </div>
  { /each }</div>

  <!--FooComponent1 text="{head.title}"/-->
</main>

<script>
    ///import logo from './assets/svelte.png'
    ///import './global.css'
    import Clock from './components/Clock.svelte';
    import Me from './components/Me.svelte';
    import store from './store.js';
    /// просто попробовать скролл https://www.cssscript.com/best-custom-scrollbar-javascript-libraries/
    import SimpleScrollbar from 'simple-scrollbar/simple-scrollbar.js';
    /// https://www.cssscript.com/performant-custom-scrollbar-javascript-library-simplebar/
    /// не может import SimpleBar from 'simpleBar';

    export let head;


    let posts, main_post, ready, scrollTimeout;
    $: main_post = {title: "Сайт загружается ...", html: '<a href="https://raw.githubusercontent.com/mche/svelte-vite-starter/master/public/посты.yaml">https://raw.githubusercontent.com/mche/svelte-vite-starter/master/public/посты.yaml</a>'};
    $: posts = [];
    $: ready = false;
    let Refs = {};

    const unsubscribe = store.посты.subscribe(посты => {
        main_post = посты.shift();
        posts = посты;///!!!! реактивность массива
        if (!scrollTimeout) scrollTimeout = setTimeout(_ => {
            SimpleScrollbar.initEl(Refs.scroll);
            ready = true;
            ///setTimeout(_ => , 500);
        }, 777);
	});



    
  
  
    const Click = (post) => {
      post.title = ' ¡ ' +post.title + ' ! ';
      post._hide = !post._hide;
      posts = posts;///!!!! реактивность массива
    };
    
    
  </script>
  
  
  <style lang="scss">
    $sv-color: #ff3e00;
    $gr-color: #1B5E20;

    main {
      padding: 1em;
      /*margin: 0 auto;*/
    }

    .hide {
        height: 0;
        visibility: hidden;
    }
  
    .ss-container {
        height: calc(100vh - 410px); /// 
        visibility: visible;
        ///overflow: hidden;
        transition: height 1s;
    }

    
    .font-effect-3d-float {
        text-shadow: 0 0.15em 0.11em rgba(0, 0, 0, 0.15), 0 0.25em 0.021em rgba(0, 0, 0, 0.1), 0 0.32em 0.32em rgba(0, 0, 0, 0.1);
    }
  
    h1 {
      font-size: 3em;
      font-weight: 100;
      margin:0;
    }

    h2 {
      font-size: 2em;
      font-weight: 100;
      margin: 0;
      color: $gr-color;
    }
  
    h3 {
      font-weight: 400;
      margin: 0rem;
      //margin-top: 3rem;
    }
    
    .me {
      display:inline-block;
    }
    
    .svelt-color {
      color: $sv-color;
    }
    .gr-color {
      color: $gr-color;
    }
    /*.center {
      text-align: center;
    }*/
    
    .clock {
      width: 15rem;
      float: right;
    }

    .post {
        padding: 1rem;
    }

    .first-post {
        margin-bottom: 1rem;
    }
    
    .code {
      display:block;
      padding: 0.5rem 1rem;
      white-space: pre-wrap;
      text-align: left;
      background-color: black;
      color: wheat;
    }
  
  </style>