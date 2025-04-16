# frontend

2025-04-15 13:25 ~ 13:30

2025-04-15 16:35 ~ 16:48

2025-04-16 09:00 ~ 

## わかったこと

htmlのheadの中にmeta情報が入っている。

- description: ページの説明。SEOで非常に重要
- viewport: ページの表示スケールを指定。モバイル対応に役立つ。

```html
<body>
    <header>
        <!-- ここにヘッダーが入ります -->
    </header>
    <div>
        <article>
            <!-- ここに本文が入ります -->
        </article>
        <aside>
            <!-- ここにサイドバーが入ります -->
        </aside>
    </div>
    <footer>
        <!-- ここにフッターが入ります -->
    </footer>
</body>
```

sectionやdivは何を使っても見た目は変わらないため、それほどこだわる必要はないが、SEO対策に役立つ。

### BEM記法

- Block: 独立したコンポーネントの名前
  - ex: header, button, card
- Element: コンポーネント内の一部を表し、ブロック名とエレメント名をアンダースコア２つでつなぐ。
  - ex: button__icon, card__title
- Modifier: 特定の状態やバリエーションを表し、エレメント名にハイフン２つでつなぐ。
  - ex: button--active, card--featured
  - ブロック名じゃないのか？
