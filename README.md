# fetch-mock-test

This is a project to reproduce "NotSupportedError: ReadableStream uploading is not supported" in Safari when fetch has mocked by [fetch-mock][].

![](https://user-images.githubusercontent.com/546312/88761220-a79d3f00-d1a9-11ea-8027-2a80bbc48fb7.png)

[fetch-mock]: https://github.com/wheresrhys/fetch-mock

## Procedure

1. `npm install`
2. `npx http-server`
3. Access http://127.0.0.1:8080 on **Safari**
4. Open development console
