# Dynamic import module
Dynamically imports modules.


## Usage

```typescript
// ./src/app.js
export function foo() {
  console.log('Hello World!!')
}
```

```typescript
// app.test.js
// async function importModule(id: string);

const app = await importModule('./src/app.js')
app.foo()
```

Run tests
```bash
npm test
```

