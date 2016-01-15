import test from 'ava'
import erci from '../app.js'

test('main', t => {
    t.is(typeof erci(), 'string')
})
