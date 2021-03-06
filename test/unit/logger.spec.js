/*
 * Author:: Ryan Hass <rhass@chef.io>
 * Copyright:: Copyright (c) 2017, Chef Software Inc.
 * License:: Apache License, Version 2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const path = require('path');
const expect = require('chai').expect;
const logger = require(path.normalize('../../lib/logger.js'));

describe("Logger Class", function () {
  describe("Color output", function () {
    it("checks to see if the TTY is interactive", function () {
      let logger = new logger.constructor;
      expect(logger.colorSupported()).to.equal(true);
    });
    it("checks to see if the user has disabled color log output")
  });
});