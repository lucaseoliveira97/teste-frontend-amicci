// useCounter.test.tsx
import { act, renderHook, waitFor } from "@testing-library/react";
import useCityWeather from "../useCityWeather";

const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementation((success) =>
    Promise.resolve(
      success({
        coords: {
          latitude: 10,
          longitude: 10
        }
      })
    )
  )
}
// @ts-ignore
navigator.geolocation = mockGeolocation

describe("useCityWeather",   () => {
  test("Deve obter o dados da consulta", async () => {
    const {result } = renderHook(() => useCityWeather());
    act(  () => {
      result.current.fetchCity("Sao Paulo");
    });
    await waitFor(() => expect(result.current.weatherData?.name).toBe("São Paulo"),{ timeout: 5000 });
  });

  
})