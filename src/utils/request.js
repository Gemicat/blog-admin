const request = ({url, methods = 'get', }) => {

}
@testable
class MyTestableClass {
  constructor() {
    this.paths = '/user'
  }
  apis() {
    return {
      a: ''
    }
  }
}

function testable(target, b, c) {
  const aps = new target()
  console.log(aps.apis)
  target.newApi = ''
  // target = () => 'skdjfksfj'
  // console.log(target, b, c)
}

const fp = new MyTestableClass()

export default fp.apis()