# Reload module concept

## Usage

You need to copy lines 8-26 to your script - 
```typescript
const require = createRequire(import.meta.url)

function clearModule(id: string, src: string) {
  const module = require.cache[require.resolve(id)]
  const root = path.parse(path.resolve(src)).dir
  if (module && 'children' in module && module.children.length > 0) {
    for (const child of module.children) {
      if (child.loaded && child.path.includes(root))
        clearModule(child.filename, src)
    }
  }
  delete require.cache[require.resolve(id)]
}

function requireModule (id: string) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return require(id)
}

```

Run tests
```bash
npm test
```

