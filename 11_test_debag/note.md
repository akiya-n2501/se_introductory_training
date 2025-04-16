# test

start: 13:00

- assertion: テスト結果が期待通りであることを確認するための式。

```python
@pytest.fixture
def calculator():
    calc = Calculator()
    yield calc
    calc.reset()
```

- `@pytest.fixture` テスト前のセットアップとティアダウンを記述
- セットアップ
  - `calc = Calculator()` で `Calculator` インスタンスを生成
  - `yield calc` テストでこのインスタンスを利用可能にする。
- ティアダウン
  - `calc.reset()` で、テスト後の後片付けとしてインスタンスをリセット。

- モック
  - メソッドが完成していなくても、呼び出しだけをテストできる。
  - MagicMockを使ってモック化する。