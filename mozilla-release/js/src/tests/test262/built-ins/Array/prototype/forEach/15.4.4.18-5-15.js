// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.foreach
es5id: 15.4.4.18-5-15
description: Array.prototype.forEach - Date Object can be used as thisArg
---*/

        var result = false;
        var objDate = new Date();

        function callbackfn(val, idx, obj) {
            result = (this === objDate);
        }

        [11].forEach(callbackfn, objDate);

assert(result, 'result !== true');

reportCompare(0, 0);
