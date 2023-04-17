import{_ as a,p as n,q as s,a1 as e}from"./framework-5866ffd3.js";const t={},p=e(`<h1 id="bitrix-framework" tabindex="-1"><a class="header-anchor" href="#bitrix-framework" aria-hidden="true">#</a> Bitrix Framework</h1><h2 id="отключить-кэш-без-авторизации" tabindex="-1"><a class="header-anchor" href="#отключить-кэш-без-авторизации" aria-hidden="true">#</a> Отключить кэш без авторизации</h2><p>Отключаем кэширование битрикс без авторизации под админом. Установка этого значения отключит кэширование на время текущей сессии пользователя:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;SESS_CLEAR_CACHE&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Y&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h2 id="определяем-ip-адрес-местоположения-модуль-магазина" tabindex="-1"><a class="header-anchor" href="#определяем-ip-адрес-местоположения-модуль-магазина" aria-hidden="true">#</a> Определяем IP адрес местоположения (модуль магазина)</h2><p>Определение местоположения (в терминах модуля “Интернет-магазин”) пользователя по его IP адресу возможно с помощью класса “\\Bitrix\\Sale\\Location\\GeoIp”.<br> Определение кода местоположения текущего пользователя:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// используем функцию главного модуля для определения реального IP адреса пользователя</span>
<span class="token variable">$ip</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Bitrix<span class="token punctuation">\\</span>Main<span class="token punctuation">\\</span>Service<span class="token punctuation">\\</span>GeoIp<span class="token punctuation">\\</span>Manager</span><span class="token operator">::</span><span class="token function">getRealIp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// используем функцию модуля интернет-магазина для определения местоположения по IP адресу</span>
<span class="token variable">$loc</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Bitrix<span class="token punctuation">\\</span>Sale<span class="token punctuation">\\</span>Location<span class="token punctuation">\\</span>GeoIp</span><span class="token operator">::</span><span class="token function">getLocationCode</span><span class="token punctuation">(</span><span class="token variable">$ip</span><span class="token punctuation">,</span> <span class="token constant">LANGUAGE_ID</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h2><p>Подключается Vue на нужной странице<br> Вместо обычного <code>new Vue()</code> нужно писать <code>BX.Vue.create()</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Bitrix<span class="token punctuation">\\</span>Main<span class="token punctuation">\\</span>UI<span class="token punctuation">\\</span>Extension</span><span class="token operator">::</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;ui.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br>`,13),o=[p];function c(i,l){return n(),s("div",null,o)}const r=a(t,[["render",c],["__file","index.html.vue"]]);export{r as default};