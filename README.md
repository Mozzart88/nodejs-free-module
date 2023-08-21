# Reload module concept

## Usage

You need to copy lines 8-26 to your script - 
```typescript
const require = createRequire(import.meta.url)

function clearModule(id: string) {
  const module = require.cache[require.resolve(id)]
  const root = ''
  if (module && 'children' in module && module.children.length > 0) {
    for (const child of module.children) {
      if (child.loaded && child.path.includes(root))
        clearModule(child.filename)
    }
  }
  console.debug(require.cache[require.resolve(id)])
  delete require.cache[require.resolve(id)]
}

function requireModule (id: string) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return require(id)
}

```

Replace `root` value in clearModule with actual absolute path to your `src` dirrectory
```typescript
const root = '/Users/Tom/nodejs-free-module/src'
```

Run tests
```bash
npm test
```

