"use strict";

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    const error = new Error("Not authenticated.");
    error.statusCode = 401;
    throw error;
  }

  const token = authHeader.split(" ")[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, "superDuperSecretKey");
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }

  if (!decodedToken) {
    const error = new Error("Not authenticated.");
    error.statusCode = 401;
    throw error;
  } // req.userId = decodedToken.userId;


  next();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL2lzLWF1dGguanMiXSwibmFtZXMiOlsiand0IiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYXV0aEhlYWRlciIsImdldCIsImVycm9yIiwiRXJyb3IiLCJzdGF0dXNDb2RlIiwidG9rZW4iLCJzcGxpdCIsImRlY29kZWRUb2tlbiIsInZlcmlmeSIsImVyciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxHQUFHLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQW5COztBQUVBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsS0FBb0I7QUFDbkMsUUFBTUMsVUFBVSxHQUFHSCxHQUFHLENBQUNJLEdBQUosQ0FBUSxlQUFSLENBQW5COztBQUVBLE1BQUksQ0FBQ0QsVUFBTCxFQUFpQjtBQUNmLFVBQU1FLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVUsb0JBQVYsQ0FBZDtBQUNBRCxJQUFBQSxLQUFLLENBQUNFLFVBQU4sR0FBbUIsR0FBbkI7QUFDQSxVQUFNRixLQUFOO0FBQ0Q7O0FBRUQsUUFBTUcsS0FBSyxHQUFHTCxVQUFVLENBQUNNLEtBQVgsQ0FBaUIsR0FBakIsRUFBc0IsQ0FBdEIsQ0FBZDtBQUNBLE1BQUlDLFlBQUo7O0FBRUEsTUFBSTtBQUNGQSxJQUFBQSxZQUFZLEdBQUdkLEdBQUcsQ0FBQ2UsTUFBSixDQUFXSCxLQUFYLEVBQWtCLHFCQUFsQixDQUFmO0FBQ0QsR0FGRCxDQUVFLE9BQU9JLEdBQVAsRUFBWTtBQUNaQSxJQUFBQSxHQUFHLENBQUNMLFVBQUosR0FBaUIsR0FBakI7QUFDQSxVQUFNSyxHQUFOO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDRixZQUFMLEVBQW1CO0FBQ2pCLFVBQU1MLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVUsb0JBQVYsQ0FBZDtBQUNBRCxJQUFBQSxLQUFLLENBQUNFLFVBQU4sR0FBbUIsR0FBbkI7QUFDQSxVQUFNRixLQUFOO0FBQ0QsR0F2QmtDLENBeUJuQzs7O0FBRUFILEVBQUFBLElBQUk7QUFDTCxDQTVCRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGp3dCA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7XG5cbm1vZHVsZS5leHBvcnRzID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IGF1dGhIZWFkZXIgPSByZXEuZ2V0KFwiQXV0aG9yaXphdGlvblwiKTtcblxuICBpZiAoIWF1dGhIZWFkZXIpIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcIk5vdCBhdXRoZW50aWNhdGVkLlwiKTtcbiAgICBlcnJvci5zdGF0dXNDb2RlID0gNDAxO1xuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgY29uc3QgdG9rZW4gPSBhdXRoSGVhZGVyLnNwbGl0KFwiIFwiKVsxXTtcbiAgbGV0IGRlY29kZWRUb2tlbjtcblxuICB0cnkge1xuICAgIGRlY29kZWRUb2tlbiA9IGp3dC52ZXJpZnkodG9rZW4sIFwic3VwZXJEdXBlclNlY3JldEtleVwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZXJyLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgdGhyb3cgZXJyO1xuICB9XG5cbiAgaWYgKCFkZWNvZGVkVG9rZW4pIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcIk5vdCBhdXRoZW50aWNhdGVkLlwiKTtcbiAgICBlcnJvci5zdGF0dXNDb2RlID0gNDAxO1xuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgLy8gcmVxLnVzZXJJZCA9IGRlY29kZWRUb2tlbi51c2VySWQ7XG5cbiAgbmV4dCgpO1xufTtcbiJdfQ==