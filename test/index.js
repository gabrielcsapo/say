var assert = require('chai').assert;
var Say = require('../saywhat.js');

describe('saywhat', function() {

    it('should not output `hello`', function() {
        assert.notEqual(Say.encode('hello'), 'hello');
    });

    it('should output `hello`', function() {
        var text = Say.encode('hello');
        var decoded = Say.decode(text);
        assert.equal(decoded, 'hello');
    });

    it('should nout output `1234567890`', function() {
        assert.notEqual(Say.encode('1234567890'), '1234567890');
    });

    it('should output `1234567890`', function() {
        var text = Say.encode('1234567890');
        var decoded = Say.decode(text);
        assert.equal(decoded, '1234567890');
    });

    it('should nout output `hello1234567890`', function() {
        assert.notEqual(Say.encode('hello1234567890'), 'hello1234567890');
    });

    it('should output `hello1234567890`', function() {
        var text = Say.encode('hello1234567890');
        var decoded = Say.decode(text);
        assert.equal(decoded, 'hello1234567890');
    });

    it('should output large text', function() {
        var string = '3rugxxs8oyojvsvf7b6vqpkpe0lgr1czpyhekxj765pa418epk15v32rwtu4hk2w5nhrq6j8zp0ztwtmr7mrjf2e3bxuqvfexkmodju8tqb841dway5v3mw5c6y73gmf5iztsjxh5l9h873q8ufy9q1t6ft3vnm7gukdo4x0vu2lznpvdxn5gkgj5kw2uz5pk2cn21th9m8o2cx1j1y8qreel0rnz2wigktc8ais3v49uqebrnf6il6bpwsekckpjo0e3m1v8p68sa56tkwtnafw84s9yg6srd7a3fcedib9d4x4295yxwpti0a2iqjb81zc5ww1gu3qht2pigvkyngrrm9efqmkfjd9xovlx7kvwec89nnm6u24j5c6244tdwb4u4pdmuwmyqd9ox1u2r589cmzr0aug8x6csgpm23stn1ipgyauwo4mipytrxnbbs8opp98tyn2nki73x8ivlanyxac0gqsqzgetauem4pgiozaphda787jrgt109lawz7gsx8oqq3oj38upyfham12av7vjpt7h26va6bgewlz6tsa88o34eslpmm1oeqm1lc9zfggoe4prll54usp5g1u1adi8k5hjxj8zttfomafzh32x1xjcwvzoq1ywhrgaksoaiwkbaxbcddm93fixn6gnkh5cbah20d0gqjbuzswhxchmmi2vk39qah65vuyubp9i4ng0vj09rzi5kmltie5zdr638bsm20wyon3ve77bes8w9ycubjkm5n4p72duv5fwlttdlyw7ym4vyjyneog32og9w2zlsvw54xbkkfz9ct8i3qvp36fo0ah2pvb54bb69ouhj12aao72aihg6i7h3akowq4jjgpkgly3akqau2t3axzbgodkpzs0fxd0qgkanwawifj457rry04wkyrx3bcnijdqk0vyhdok3cbco66eqc1d1nb1k6kebgzmth0q5b8bpp8qsc6660wmc8eb3zyhteogvmsgwufgxkyc04r3x04oicfdisxcc0v0ietpp81tfk4juomzv8ddfyrol9v6309xiz8nohidyyns0wyyv6m37nuxdbxpx0h2gbdycyej1lqc8sypvd3pgohg42cssovb10etmlcq3n853jkns1ibc1o5d6slvm7wpr2t6ianosqv98c6wda3obv47x542pq1zj31qguku207akx5ov0gdm1t0vk3iyoeeralsgcmryxeazbgfw8qmu8gn6j45ywgj1t4a87ayo44l5qjslwpcjpclajcbfyn5f8iox8mf22eajwrimz0dxo76uhxun87sfdafiyn01rhrwdfk24ekkkwme83puwmrlcpbmyvmwezvce4k0exwy4u0f2khbu1naorez6plz2mflb9b80d360cmxuyjhcp67ko0oferf6hwmhvz9cnshx24ki57nfv1mh6t6t11uchwow5d7j3hy6uzv5k8ma152scvkwt5ioxvbtoozsj3t9c8vwafg371n9uriisahslpfqlo6zldx7nkd8gel1jerjihecfck7gvvzgyfd0idfy2c31053izatlzldxo5q04ezhypk5bump4nypciftox5ppfly0k0m4gn05dfy7brxl2tl2nza8b5v7ck3g41ftv09zfoaneupglxjer2hr5g44luzq5vp2zunbrnapwjy08zeja64y1vu2krrjml5vjvwzd1ocqsqhc1omi1i1ryoauagt21mlw903srg9z755zp7l0ovt33176tchj7cn2lhfnccj30181l3d3f3yrt372wda5jyygac5gzbmozhed2e014q5ew3fr8nq1kqo6l6zjitkijc6o6e5eztzxeq9iuo9lo27kufr0a6s0vv8z93va77ln8uak34lsxralm67s5zle2cvm0vndkzjts2lhgcf9juchz5mg7iplvj2g8a3dmkrwmw4auvjihf7muhv7b157243lumijlz30uex4bvpl56vv';
        var text = Say.encode(string);
        var decoded = Say.decode(text);
        assert.equal(decoded, string);
    });

    it('should work with \'', function() {
        var string = "when words aren't enough";
        var text = Say.encode(string);
        var decoded = Say.decode(text);
        assert.equal(decoded, string);
    });

    it('should work with \"', function() {
        var string = 'when words aren\"t enough';
        var text = Say.encode(string);
        var decoded = Say.decode(text);
        assert.equal(decoded, string);
    });

});
