<main>
  <div class="clock">
    <Clock />
    <div>Это SVG-часы - динамический Свелт-компонент.</div>
  </div>
  <h1>
    <span class="me"><Me options={{style:{height: '15rem'}}} /></span>
    <span class="svelt-color font-effect-3d-float">{head.title}</span>
  </h1>

  <h2 class="gr-color">Доброго всем</h2>

  <div class="begin">
    <p>Эта страничка создана на еще одном прекрасном реактивном фреймворке javascript - <a href="https://ru.svelte.dev/">Svelte</a>.</p>
    <p>Исходники сайта можно глянуть <a href="https://github.com/mche/svelte-app">https://github.com/mche/svelte-app</a>. Потом на другом шаблоне - <a href="https://github.com/mche/svelte-vite-starter">https://github.com/mche/svelte-vite-starter</a></p>
    <p>Ниже просто подборка коротких заметок. Заголовки кликабельны.</p>
    
  </div>

  <!--p><a href="https://ru.svelte.dev/tutorial">Svelte учебник</a> - на официальном русскоязычном сайтеге.</p>
  <p><a href="https://t.me/sveltejs">Телеграм Свелт</a> - официальный русскоязычный канал.</p-->
  
  { #each posts as p }
    <h3><a  on:click={ Click(p) }  href="javascript:" class="gr-color">{ p.title }</a></h3>
    <p>{@html p.html }</p>
    {#if !!p.code }<code class="code">{ p.code }</code>{/if}
  { /each }
  <!--FooComponent1 text="{head.title}"/-->
</main>

<script>
    ///import logo from './assets/svelte.png'
    ///import './global.css'
    import Clock from './components/Clock.svelte';
    import Me from './components/Me.svelte';
    import посты from './посты.js';
    ///export let name;
    export let head;
    ///export let посты;
    
    $: posts = посты;
  
  
    const Click = (post) => {
      post.title = ' ¡ ' +post.title + ' ! ';
      post._hide = !post._hide;
      posts = posts;///!!!! реактивность массива
    };
    
  //~   $: head.title = name;
    ///$: document.title = name;
   
  /// $: name2 = name.toUpperCase();
    ///Click();
    
  </script>
  
  
  <style lang="scss">
    $sv-color: #ff3e00;
    $clr1: #1B5E20;

    main {
      padding: 1em;
      /*margin: 0 auto;*/
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
      margin-top: 0;
    }
  
    h3 {
      font-weight: 400;
      margin-bottom: 0rem;
    }
    
    .me {
      display:inline-block;
    }
    
    .svelt-color {
      color: $sv-color;
    }
    .gr-color {
      color: $clr1;
    }
    /*.center {
      text-align: center;
    }*/
    
    .clock {
      width: 15rem;
      float: right;
    }
    
    .code {
      display:block;
      padding: 0 1rem;
      white-space: pre-wrap;
      text-align: left;
      background-color: black;
      color: wheat;
    }
  
  </style>